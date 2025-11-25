import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, Button, GlassCard } from '../../components/ui';
import { INDUSTRIES } from '../../data/industries';
import { PRODUCTS } from '../../data/products';
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
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: ${colors.primary};
  
  @media (min-width: 768px) {
    font-size: 5rem;
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
                                <Link href="/about" passHref legacyBehavior>
                                    <Button variant="outline">Our Story</Button>
                                </Link>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                                    alt="Engineering Excellence"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                            </div>
                        </Reveal>
                    </Grid>
                </Container>
            </Section>

            <Section bgColor="#F9FAFB">
                <Container>
                    <Reveal delay={0.2}>
                        <Grid smCols={2} lgCols={4} gap="2rem">
                            <div style={{ textAlign: 'center' }}>
                                <StatNumber>50+</StatNumber>
                                <StatLabel>Years of Experience</StatLabel>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <StatNumber>19</StatNumber>
                                <StatLabel>Industries Served</StatLabel>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <StatNumber>500+</StatNumber>
                                <StatLabel>Projects Completed</StatLabel>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <StatNumber>100%</StatNumber>
                                <StatLabel>Client Satisfaction</StatLabel>
                            </div>
                        </Grid>
                    </Reveal>
                </Container>
            </Section>

            <Section bgColor="#FEF2F2">
                <Container>
                    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: colors.primary }}>Industries We Serve</h2>
                        <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                            Our solutions are tailored to meet the unique challenges of diverse industrial sectors.
                        </p>
                    </div>

                    <Grid smCols={2} lgCols={4} gap="1.5rem">
                        {INDUSTRIES.slice(0, 8).map((industry) => (
                            <Link key={industry.id} href={`/industries/${industry.id}`} passHref legacyBehavior>
                                <GlassCard
                                    style={{
                                        height: '100%',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        isolation: 'isolate'
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

                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: colors.primary }}>{industry.title}</h3>
                                    <p style={{ fontSize: '0.875rem', color: colors.textLight, lineHeight: '1.6' }}>
                                        {industry.description}
                                    </p>

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

                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <Link href="/industries" passHref legacyBehavior>
                            <Button variant="outline">View All Industries</Button>
                        </Link>
                    </div>
                </Container>
            </Section>

            <ProductShowcase />

            <Section bgColor={colors.primary} textColor="#FFFFFF">
                <Container>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>Ready to Optimize Your Operations?</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '4rem', color: '#FECACA' }}>
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
