import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, GlassCard } from '../../components/ui';
import { INDUSTRIES } from '../../data/industries';

const HeroSection = styled.section`
  width: 100%;
  height: 70vh;
  position: relative;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920');
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));
  }
`;

const HeroTitle = styled.h1`
  position: relative;
  z-index: 10;
  font-size: 4rem;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: -0.025em;
  text-align: center;
  text-shadow: 0 4px 6px rgba(0,0,0,0.3);

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const CapabilityItem = styled.div`
  border-top: 1px solid #FECACA;
  padding-top: 2rem;
`;

const CapNumber = styled.span`
  color: #FFFFFF;
  font-family: monospace;
  font-size: 1.125rem;
  display: block;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const CapTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1rem;
`;

const CapDesc = styled.p`
  font-size: 1.125rem;
  color: #FECACA;
  line-height: 1.625;
  font-weight: 300;
`;

const CAPABILITIES = [
    {
        title: "Pressure Instruments",
        description: "Precision pressure measurement and monitoring solutions for critical industrial processes and demanding environments."
    },
    {
        title: "Temperature Control",
        description: "Advanced temperature sensing and monitoring systems ensuring optimal performance in extreme conditions."
    },
    {
        title: "Valve Automation",
        description: "Pneumatic and electrical automation solutions for comprehensive industrial valve control systems."
    },
    {
        title: "Flow Monitoring",
        description: "Accurate flow measurement instruments enabling process optimization and operational efficiency."
    },
    {
        title: "Motion Control",
        description: "Precision encoders, resolvers, and speed sensors for demanding industrial motion applications."
    },
    {
        title: "Condition Monitoring",
        description: "Predictive maintenance and monitoring systems maximizing equipment uptime and operational reliability."
    }
];

function IndustriesPage() {
    return (
        <main>
            <HeroSection>
                <HeroTitle>Industries & Capabilities</HeroTitle>
            </HeroSection>

            <Section>
                <Container>
                    <div style={{ marginBottom: '6rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Sectors We Power</h2>
                        <p style={{ fontSize: '1.5rem', color: colors.text, fontWeight: '300', maxWidth: '56rem' }}>
                            Our instrumentation solutions are trusted by 19 critical sectors, ensuring safety, efficiency, and precision across the industrial landscape.
                        </p>
                    </div>

                    <Grid smCols={2} lgCols={4} gap="1.5rem">
                        {INDUSTRIES.map((industry) => (
                            <Link key={industry.id} href={`/industries/${industry.id}`} passHref legacyBehavior>
                                <GlassCard
                                    style={{
                                        height: '100%',
                                        minHeight: '15rem',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        isolation: 'isolate',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {/* Background Image with Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        zIndex: -1,
                                        backgroundImage: `url(${industry.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        opacity: 0.15,
                                        transition: 'opacity 0.3s ease, transform 0.5s ease'
                                    }}
                                        className="card-bg"
                                    />

                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.primary, textAlign: 'center', zIndex: 1 }}>{industry.title}</h3>

                                    <style jsx>{`
                                        div:hover .card-bg {
                                            opacity: 0.25 !important;
                                            transform: scale(1.05);
                                        }
                                    `}</style>
                                </GlassCard>
                            </Link>
                        ))}
                    </Grid>
                </Container>
            </Section>

            <Section bgColor={colors.primary} textColor="#FFFFFF">
                <Container>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '6rem' }}>Our Capabilities</h2>
                    <Grid lgCols={3} gap="4rem">
                        {CAPABILITIES.map((cap, index) => (
                            <CapabilityItem key={cap.title}>
                                <CapNumber>0{index + 1}</CapNumber>
                                <CapTitle>{cap.title}</CapTitle>
                                <CapDesc>{cap.description}</CapDesc>
                            </CapabilityItem>
                        ))}
                    </Grid>
                </Container>
            </Section>
        </main>
    );
}

export default IndustriesPage;
