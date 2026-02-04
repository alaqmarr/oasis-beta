import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { colors } from '../../themes/colors';
import { Container, Section } from '../../components/ui';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const PDFContainer = styled.div`
  width: 100%;
  height: 800px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 2rem;
`;

const CertificateInfo = styled.div`
  background-color: #F3F4F6;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 1.125rem;
  color: ${colors.text};
  font-weight: 600;
`;

export default function ResourcesPage() {
    return (
        <main>
            <Head>
                <title>Resources & Certificates | Oasis Group</title>
                <meta name="description" content="View Oasis Group's certifications and resources including ISO and UDYAM registration details." />
            </Head>

            <Section>
                <Container>
                    <PageTitle>Resources & Certificates</PageTitle>

                    <CertificateInfo>
                        <InfoText>UDYAM Registration Certificate No.: UDYAM-TS-20-0004940</InfoText>
                    </CertificateInfo>

                    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.text }}>ISO Certificate</h2>
                    </div>

                    <PDFContainer>
                        <iframe
                            src="/resources/ISO Certificate.pdf"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            title="ISO Certificate"
                        />
                    </PDFContainer>
                </Container>
            </Section>
        </main>
    );
}
