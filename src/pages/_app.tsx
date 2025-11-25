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

  const shownPagesRef = React.useRef<Set<string>>(new Set());

  useEffect(() => {
    // 1. Proactive Popup Logic
    let timeoutId: NodeJS.Timeout;

    const handleProactivePopup = () => {
      // Only proceed if user hasn't submitted email
      if (!hasSubmitted && !userEmail) {
        const currentPath = router.asPath;

        // Check if we've already shown popup for this specific page
        if (!shownPagesRef.current.has(currentPath)) {
          timeoutId = setTimeout(() => {
            // Double check conditions before showing
            if (!hasSubmitted && !userEmail && !shownPagesRef.current.has(currentPath)) {
              const pageName = router.pathname.split('/').pop() || 'Home';
              const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

              let gist = 'Get the latest updates and product catalogs directly to your inbox.';
              if (router.pathname.includes('products')) gist = 'Looking for specific instrumentation? Let us send you our complete product specifications.';
              if (router.pathname.includes('industries')) gist = 'Discover how we serve your industry. Request our sector-specific case studies.';

              openEnquiryModal({
                title: `Interested in ${formattedPageName}?`,
                description: gist,
                subject: `Proactive Enquiry from ${currentPath}`
              });

              // Mark this page as shown
              shownPagesRef.current.add(currentPath);
            }
          }, 15000); // 15 seconds delay per page
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
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: colors.primary }}>Explore Solutions</h4>
          <p style={{ fontSize: '0.875rem', marginBottom: '1rem', color: colors.text }}>
            Check out our specialized products designed for these industries.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => router.push('/products')}
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
              View Products
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
