import React from 'react';
import styled from 'styled-components';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, GlassCard } from '../../components/ui';

const HeroSection = styled.section`
  width: 100%;
  padding: 12rem 0 6rem;
  background-color: ${colors.primary};
  background-image: linear-gradient(rgba(220, 38, 38, 0.9), rgba(220, 38, 38, 0.8)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920');
  background-size: cover;
  background-position: center;
  color: #FFFFFF;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #FECACA;
  font-weight: 300;
  max-width: 48rem;
  line-height: 1.6;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 3rem;
  padding-bottom: 3rem;
  border-left: 2px solid #FECACA;

  &:last-child {
    border-left: 2px solid transparent;
  }

  &::before {
    content: '';
    position: absolute;
    left: -0.5625rem; // -9px
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${colors.primary};
    border: 2px solid #FFFFFF;
  }
`;

const Year = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
`;

const DivisionCard = styled.div`
  padding: 2rem;
  background-color: #FFFFFF;
  border: 1px solid #FEF2F2;
  height: 100%;
`;

function AboutPage() {
    return (
        <main>
            <HeroSection>
                <Container>
                    <Title>About Oasis Group</Title>
                    <Subtitle>
                        A family-owned enterprise driven by innovation and a commitment to excellence, serving the industry since 1974.
                    </Subtitle>
                </Container>
            </HeroSection>

            <Section>
                <Container>
                    <Grid lgCols={2} gap="6rem">
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Our Journey</h2>
                            <div style={{ marginTop: '3rem' }}>
                                <TimelineItem>
                                    <Year>1974</Year>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Foundation</h3>
                                    <p>Oasis Instruments Company was established by Huseni Rangoonwala in Kolkata as a trading house for process instruments, initially dealing in Pressure Gauges and Dial Thermometers.</p>
                                </TimelineItem>
                                <TimelineItem>
                                    <Year>1998</Year>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Expansion to Hyderabad</h3>
                                    <p>Opened a branch in Hyderabad to expand operations and better serve the growing industrial base in the region.</p>
                                </TimelineItem>
                                <TimelineItem>
                                    <Year>2009</Year>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Diversification</h3>
                                    <p>Management diversified into pneumatic automation, floating a new company "Oasis Valves & Pneumatics". Registered with MSME and approved for ISO-9001 processes.</p>
                                </TimelineItem>
                                <TimelineItem>
                                    <Year>2016</Year>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Consolidation</h3>
                                    <p>Complete shifting of all operations from Kolkata to Hyderabad. Established a new setup on the outskirts of Hyderabad at Genome Valley.</p>
                                </TimelineItem>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Business Divisions</h2>
                            <Grid gap="2rem">
                                <DivisionCard>
                                    <div style={{ height: '200px', marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
                                            alt="Instruments"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.primary }}>Oasis Instruments Company</h3>
                                    <p>The original house of instruments with a vast portfolio including Flow Meters, Pressure Transmitters, Temperature Sensors, Encoders, and Condition Monitoring Systems.</p>
                                </DivisionCard>
                                <DivisionCard>
                                    <div style={{ height: '200px', marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1531297461136-82lw9b21d94?auto=format&fit=crop&q=80&w=600"
                                            alt="Valves"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.primary }}>Oasis Valves & Pneumatics</h3>
                                    <p>Engaged in the automation of valves, both pneumatically and electrically operated. An ISO-9001 approved MSME unit located at Genome Valley, Hyderabad.</p>
                                </DivisionCard>
                            </Grid>
                        </div>
                    </Grid>
                </Container>
                <Section bgColor="#F9FAFB">
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: colors.primary }}>Our Core Values</h2>
                            <p style={{ fontSize: '1.125rem', color: colors.textLight, maxWidth: '600px', margin: '0 auto' }}>
                                Guided by principles that ensure long-term success and trust.
                            </p>
                        </div>
                        <Grid lgCols={3} gap="2rem">
                            <GlassCard>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.primary }}>Our Mission</h3>
                                <p style={{ color: colors.text, lineHeight: '1.6' }}>
                                    To provide world-class instrumentation and automation solutions that enhance efficiency and safety for our clients, while fostering a culture of continuous innovation.
                                </p>
                            </GlassCard>
                            <GlassCard>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👁️</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.primary }}>Our Vision</h3>
                                <p style={{ color: colors.text, lineHeight: '1.6' }}>
                                    To be the global leader in precision engineering, recognized for our quality, integrity, and commitment to sustainable industrial growth.
                                </p>
                            </GlassCard>
                            <GlassCard>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏆</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.primary }}>Quality Policy</h3>
                                <p style={{ color: colors.text, lineHeight: '1.6' }}>
                                    We are committed to delivering products that meet or exceed international standards. Our ISO-9001 certified processes ensure rigorous quality control at every stage of manufacturing.
                                </p>
                            </GlassCard>
                        </Grid>
                    </Container>
                </Section>
            </Section>
        </main>
    );
}

export default AboutPage;
