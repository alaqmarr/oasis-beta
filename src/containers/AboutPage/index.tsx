import React from 'react';
import styled from 'styled-components';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, GlassCard } from '../../components/ui';

const HeroSection = styled.section`
  width: 100%;
  padding: 8rem 0 4rem;
  background-color: ${colors.primary};
  background-image: linear-gradient(rgba(220, 38, 38, 0.9), rgba(220, 38, 38, 0.8)), url('/images/about/office-front.jpg');
  background-size: cover;
  background-position: center;
  color: #FFFFFF;

  @media (min-width: 768px) {
    padding: 12rem 0 6rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #FECACA;
  font-weight: 300;
  max-width: 48rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 1.5rem;
  padding-bottom: 2rem;
  border-left: 2px solid #FECACA;

  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-bottom: 3rem;
  }

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
                    {/* Our Journey Section */}
                    <div style={{ marginBottom: '6rem' }}>
                        <Grid lgCols={12} gap="4rem">
                            <div style={{ gridColumn: 'span 4' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: colors.primary, position: 'sticky', top: '2rem' }}>
                                    Our Journey
                                </h2>
                                <p style={{ fontSize: '1.125rem', color: colors.textLight, lineHeight: '1.6', position: 'sticky', top: '6rem' }}>
                                    From a small trading house in Kolkata to a leading manufacturing hub in Hyderabad, our timeline reflects our resilience and ambition.
                                </p>
                            </div>
                            <div style={{ gridColumn: 'span 8' }}>
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
                                    <p>Complete shifting of all operations from Kolkata to Hyderabad. Established a new setup on the outskirts of Hyderabad at Genome Valley. Added unit for manufacturing of sensors, cable harnessing and sensing solutions.</p>
                                </TimelineItem>
                            </div>
                        </Grid>
                    </div>

                    {/* Business Divisions Section */}
                    <div>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: colors.primary }}>Business Divisions</h2>
                            <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: colors.textLight }}>
                                Specialized units delivering excellence in instrumentation and automation.
                            </p>
                        </div>
                        <Grid smCols={1} lgCols={2} gap="2rem">
                            <DivisionCard>
                                <div style={{ height: '300px', marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                    <img
                                        src="/images/about/instruments-lab.jpg"
                                        alt="Instruments Lab"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.primary }}>Oasis Instruments Company</h3>
                                <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>The original house of instruments expanded to sensing solutions, process automation and critical cable harness.</p>
                            </DivisionCard>
                            <DivisionCard>
                                <div style={{ height: '300px', marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                    <img
                                        src="/images/about/valves-workshop.jpg"
                                        alt="Valves Workshop"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.primary }}>Oasis Valves & Pneumatics</h3>
                                <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>Engaged in the automation of valves, both pneumatically and electrically operated. An MSME unit located at Genome Valley, Hyderabad.</p>
                            </DivisionCard>
                        </Grid>
                    </div>
                </Container>
                <Section bgColor="#F9FAFB">
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: colors.primary }}>Our Core Values</h2>
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
