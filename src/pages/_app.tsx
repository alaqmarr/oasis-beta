import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import GlobalStyle from '../global-styles';
import { colors } from '../themes/colors';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EnquiryProvider, useEnquiry } from '../context/EnquiryContext';
import EnquiryModal from '../components/EnquiryModal';

// Component to handle page-specific logic (popups, alerts)
function PageInteractionHandler() {
  const router = useRouter();
  const { openEnquiryModal, hasSubmitted, userEmail } = useEnquiry();
  const [showIndustryAlert, setShowIndustryAlert] = useState(false);

  const emailedPagesRef = React.useRef<Set<string>>(new Set());
  const shownPagesRef = React.useRef<Set<string>>(new Set());

  // 1. Page Visit Tracking (Emails)
  useEffect(() => {
    if (!userEmail) return;

    const currentPath = router.asPath;
    if (emailedPagesRef.current.has(currentPath)) return;

    // Send visit email
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'VISIT',
        data: {
          name: localStorage.getItem('userName') || 'Visitor',
          email: userEmail,
          page: currentPath
        }
      })
    }).catch(err => console.error('Failed to report visit:', err));

    emailedPagesRef.current.add(currentPath);
  }, [router.asPath, userEmail]);

  // 2. Proactive Popup Logic
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleProactivePopup = () => {
      const excludedPaths = ['/contact'];
      if (excludedPaths.includes(router.pathname)) {
        return;
      }

      if (!hasSubmitted && !userEmail) {
        const currentPath = router.asPath;

        if (!shownPagesRef.current.has(currentPath)) {
          timeoutId = setTimeout(() => {
            if (!hasSubmitted && !userEmail && !shownPagesRef.current.has(currentPath)) {
              let pageName = router.pathname.split('/').pop() || 'Home';

              // Handle dynamic routes like [slug]
              if (pageName === '[slug]' && router.query.slug) {
                pageName = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug;
              }

              const formattedPageName = pageName === 'Home' || pageName === '' ? 'Oasis Group' : pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' ');

              let gist = 'Oasis Group is your partner for industrial automation and instrumentation.';
              if (router.pathname.includes('industries')) gist = 'Discover how we serve your industry. Request our sector-specific case studies.';

              openEnquiryModal({
                title: `Interested in ${formattedPageName}?`,
                description: gist,
                subject: `Proactive Enquiry from ${currentPath}`
              });

              shownPagesRef.current.add(currentPath);
            }
          }, 15000);
        }
      }
    };

    handleProactivePopup();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [router.asPath, router.pathname, hasSubmitted, userEmail, openEnquiryModal]);

  return (
    <>
      {showIndustryAlert && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#FFFFFF',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          borderLeft: `4px solid ${colors.primary}`,
          zIndex: 50,
          maxWidth: '300px',
          animation: 'slideIn 0.5s ease-out'
        }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: colors.primary }}>
            {hasSubmitted || userEmail ? 'Have a Project?' : 'Stay Connected'}
          </h4>
          <p style={{ fontSize: '0.875rem', marginBottom: '1rem', color: colors.text }}>
            {hasSubmitted || userEmail
              ? 'Our engineering team is ready to assist with your requirements.'
              : 'Join our professional network for industry updates and insights.'}
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => {
                openEnquiryModal({
                  title: hasSubmitted || userEmail ? 'Project Enquiry' : 'Join Our Network',
                  description: hasSubmitted || userEmail ? 'Tell us about your requirements.' : 'Enter your details to stay connected.',
                  subject: hasSubmitted || userEmail ? 'Project Enquiry via Sticky' : 'Newsletter Signup'
                });
                setShowIndustryAlert(false);
              }}
              style={{
                backgroundColor: colors.primary,
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                fontSize: '0.75rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {hasSubmitted || userEmail ? 'Enquire Now' : 'Connect'}
            </button>
            <button
              onClick={() => setShowIndustryAlert(false)}
              style={{
                background: 'none',
                border: 'none',
                textDecoration: 'underline',
                fontSize: '0.75rem',
                cursor: 'pointer',
                color: colors.textLight
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ colors }}>
      <EnquiryProvider>
        <Head>
          <title>Oasis Group | Precision Engineering</title>
          <meta name="description" content="Oasis Group - Industrial Instrumentation and Automation Solutions" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <EnquiryModal />
        <PageInteractionHandler />
      </EnquiryProvider>
    </ThemeProvider>
  );
}
