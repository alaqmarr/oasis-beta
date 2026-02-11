import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, Button, GlassCard } from '../../components/ui';
import { INDUSTRIES } from '../../data/industries';
import ProductShowcase from '../../components/ProductShowcase';
import HeroCarousel from '../../components/HeroCarousel';
import { Reveal } from '../../components/Reveal';
import { LiquidText } from '../../components/ui/LiquidText';


const HeroSection = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${colors.background.light};
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: ${colors.primary};
  
  @media (min-width: 768px) {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.text};
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: ${colors.primary};
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${colors.text};
  font-weight: 600;
`;



function HomePage() {
    return (
        <main>

            <HeroCarousel />
            <Section>
                <Container>
                    <Grid lgCols={2} gap="4rem">
                        <Reveal>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>
                                    <LiquidText>Engineering Excellence</LiquidText> <br />
                                    Since 1974
                                </h2>
                                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                                    At Oasis Group, we don't just supply components; we engineer solutions. With over five decades of experience, we have established ourselves as a trusted partner for industries ranging from automotive to nuclear power. Our commitment to quality and innovation ensures that your operations run safely, efficiently, and reliably.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                                <img
                                    src="/images/about/factory-side.jpg"
                                    alt="Engineering Excellence"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                            </div>
                        </Reveal>
                    </Grid>
                </Container>
            </Section>

            {/* 50+ Years Section Removed */}

            {/* Industries We Serve Section Removed */}

            {/* <ProductShowcase /> */}

            <Section bgColor={colors.primary} textColor="#FFFFFF" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                <Container>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Ready to Optimize Your Operations?</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#FECACA' }}>
                            Contact our engineering team today for a consultation tailored to your specific needs.
                        </p>
                        <Link href="/contact" passHref legacyBehavior>
                            <Button style={{ backgroundColor: '#FFFFFF', color: colors.primary }}>Get in Touch</Button>
                        </Link>
                    </div>
                </Container>
            </Section>
        </main >
    );
}

export default HomePage;
