import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../themes/colors';
import { Container, Grid, Button, GlassCard } from './ui';
import { CATEGORIES } from '../data/categories';

const ShowcaseSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #FEF2F2 0%, #FFFFFF 100%);
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 8rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 10;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${colors.textLight};
  max-width: 600px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #F3F4F6;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: ${colors.primaryLight};
  color: ${colors.primary};
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export default function IndustryShowcase() {
    return (
        <ShowcaseSection>
            <Container>
                <SectionHeader>
                    <Badge>Sectors</Badge>
                    <Title>Our Critical Sectors</Title>
                    <Subtitle>
                        Delivering precision and reliability across key industries that power the world.
                    </Subtitle>
                </SectionHeader>

                <Grid lgCols={3} gap="2rem">
                    {CATEGORIES.map((category) => (
                        <Link key={category.id} href={`/industries#${category.id}`} passHref legacyBehavior>
                            <a style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'block' }}>
                                <GlassCard style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <ImageContainer>
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </ImageContainer>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: colors.text }}>
                                        {category.title}
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', color: colors.textLight, lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                                        {category.description}
                                    </p>
                                    <div style={{ marginTop: 'auto' }}>
                                        <span style={{
                                            color: colors.primary,
                                            fontWeight: '600',
                                            fontSize: '0.875rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            Explore Sector <span>→</span>
                                        </span>
                                    </div>
                                </GlassCard>
                            </a>
                        </Link>
                    ))}
                </Grid>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link href="/industries" passHref legacyBehavior>
                        <Button variant="outline">View All Industries</Button>
                    </Link>
                </div>
            </Container>
        </ShowcaseSection>
    );
}
