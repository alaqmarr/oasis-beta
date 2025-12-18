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

const JourneyGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
  }
`;

const JourneyLeft = styled.div`
  @media (min-width: 768px) {
    position: sticky;
    top: 2rem;
    align-self: start;
  }
`;

const JourneyRight = styled.div`
  /* No special styles needed */
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${colors.primary};

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
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
                    <div style={{ marginBottom: '4rem' }}>
                        <JourneyGrid>
                            <JourneyLeft>
                                <SectionTitle>Our Journey</SectionTitle>
                                <p style={{ fontSize: '1rem', color: colors.textLight, lineHeight: '1.6' }}>
                                    From a small trading house in Kolkata to a leading manufacturing hub in Hyderabad, our timeline reflects our resilience and ambition.
                                </p>
                            </JourneyLeft>
                            <JourneyRight>
                                <TimelineItem>
                                    <Year>1974</Year>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem' }}>Foundation</h3>
                                    <p style={{ fontSize: '0.9375rem' }}>Oasis Instruments Company was established by Huseni Rangoonwala in Kolkata as a trading house for process instruments.</p>
                                </TimelineItem>
                                <TimelineItem>
                                    <Year>1998</Year>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem' }}>Expansion to Hyderabad</h3>
                                    <p style={{ fontSize: '0.9375rem' }}>Opened a branch in Hyderabad to expand operations and better serve the growing industrial base in the region.</p>
                                </TimelineItem>
                                <TimelineItem>
                                    <Year>2009</Year>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem' }}>Diversification</h3>
                                    <p style={{ fontSize: '0.9375rem' }}>Management diversified into pneumatic automation with a new company "Oasis Valves &amp; Pneumatics". ISO-9001 certified.</p>
                                </TimelineItem>
                                <TimelineItem>
                                    <Year>2016</Year>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem' }}>Consolidation</h3>
                                    <p style={{ fontSize: '0.9375rem' }}>Complete relocation from Kolkata to Hyderabad at Genome Valley. Added sensors, cable harnessing, and sensing solutions manufacturing.</p>
                                </TimelineItem>
                            </JourneyRight>
                        </JourneyGrid>
                    </div>

                    {/* Business Divisions Section */}
                    <div>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <SectionTitle style={{ textAlign: 'center' }}>Business Divisions</SectionTitle>
                            <p style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto', color: colors.textLight }}>
                                Specialized units delivering excellence in instrumentation and automation.
                            </p>
                        </div>
                        <Grid smCols={1} lgCols={2} gap="2rem">
                            <DivisionCard>
                                <div style={{ height: '200px', marginBottom: '1rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                    <img
                                        src="/images/about/instruments-lab.jpg"
                                        alt="Instruments Lab"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: colors.primary }}>Oasis Instruments Company</h3>
                                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>The original house of instruments expanded to sensing solutions, process automation and critical cable harness.</p>
                            </DivisionCard>
                            <DivisionCard>
                                <div style={{ height: '200px', marginBottom: '1rem', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                    <img
                                        src="/images/about/valves-workshop.jpg"
                                        alt="Valves Workshop"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: colors.primary }}>Oasis Valves &amp; Pneumatics</h3>
                                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>Engaged in the automation of valves, both pneumatically and electrically operated. MSME unit at Genome Valley.</p>
                            </DivisionCard>
                        </Grid>
                    </div>
                </Container>
            </Section>

            <Section bgColor="#F9FAFB">
                <Container>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <SectionTitle style={{ textAlign: 'center' }}>Our Core Values</SectionTitle>
                        <p style={{ fontSize: '1rem', color: colors.textLight, maxWidth: '600px', margin: '0 auto' }}>
                            Guided by principles that ensure long-term success and trust.
                        </p>
                    </div>
                    <Grid smCols={1} lgCols={3} gap="1.5rem">
                        <GlassCard>
                            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>🎯</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: colors.primary }}>Our Mission</h3>
                            <p style={{ color: colors.text, lineHeight: '1.6', fontSize: '0.9375rem' }}>
                                To provide world-class instrumentation and automation solutions that enhance efficiency and safety for our clients.
                            </p>
                        </GlassCard>
                        <GlassCard>
                            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>👁️</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: colors.primary }}>Our Vision</h3>
                            <p style={{ color: colors.text, lineHeight: '1.6', fontSize: '0.9375rem' }}>
                                To be the global leader in precision engineering, recognized for our quality, integrity, and sustainable growth.
                            </p>
                        </GlassCard>
                        <GlassCard>
                            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>🏆</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: colors.primary }}>Quality Policy</h3>
                            <p style={{ color: colors.text, lineHeight: '1.6', fontSize: '0.9375rem' }}>
                                We are committed to delivering products that meet or exceed international standards with ISO-9001 certified processes.
                            </p>
                        </GlassCard>
                    </Grid>
                </Container>
            </Section>
        </main>
    );
}

export default AboutPage;
