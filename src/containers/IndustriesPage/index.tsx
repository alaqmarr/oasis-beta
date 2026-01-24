import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, GlassCard } from '../../components/ui';
import { INDUSTRIES } from '../../data/industries';
import { CATEGORIES, Category } from '../../data/categories';

// All keywords for SEO (same on every page)
const allKeywords = 'speed sensors, vibration sensors, temperature sensors, temperature transmitters, pressure sensors, pressure transmitters, flow meters, level transmitters, limit switches, vacuum contactors, remote monitoring system, condition monitoring, predictive maintenance, automotive sensors, railway instrumentation, oil and gas instrumentation, thermal power sensors, nuclear power instrumentation, hydel power sensors, wind energy sensors, defence sensors, mining instrumentation, steel plant sensors, energy storage monitoring, water treatment sensors, industrial instrumentation, automation solutions, industrial sensors India, precision engineering, process control, safety systems, Oasis Group';

const HeroSection = styled.section`
  width: 100%;
  height: 60vh;
  position: relative;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/about/factory-side.jpg');
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
  font-size: 2rem;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: -0.025em;
  text-align: center;
  text-shadow: 0 4px 6px rgba(0,0,0,0.3);

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CategoryItem = styled.div`
  border: 1px solid ${colors.border || '#E5E7EB'};
  border-radius: 1rem;
  overflow: hidden;
  background-color: #FFFFFF;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryHeader = styled.div<{ $isOpen: boolean }>`
  padding: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.$isOpen ? '#FEF2F2' : '#FFFFFF'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FEF2F2;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.primary};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const ArrowIcon = styled.span<{ $isOpen: boolean }>`
  font-size: 1.5rem;
  color: ${colors.primary};
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
`;

const CategoryContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '2000px' : '0'};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  border-top: ${props => props.$isOpen ? '1px solid #E5E7EB' : 'none'};
`;

const ContentWrapper = styled.div`
  padding: 2rem;
`;

const SubIndustryLink = styled.a`
  display: block;
  text-decoration: none;
`;

function IndustriesPage() {
    const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

    const toggleCategory = (id: string) => {
        setOpenCategoryId(openCategoryId === id ? null : id);
    };

    return (
        <main>
            <Head>
                <title>Industries We Serve | Oasis Group</title>
                <meta name="description" content="Oasis Group serves automotive, railway, oil & gas, thermal power, nuclear power, hydel power, wind energy, defence, mining, steel plants, and water treatment industries with precision instrumentation and sensors." />
                <meta name="keywords" content={allKeywords} />
                <link rel="canonical" href="https://oasisgroup.com/industries" />
                <meta property="og:title" content="Industries We Serve | Oasis Group" />
                <meta property="og:description" content="Industrial instrumentation solutions for automotive, railway, power generation, oil & gas, and manufacturing industries." />
            </Head>
            <HeroSection>
                <HeroTitle>Our Presence</HeroTitle>
            </HeroSection>

            <Section>
                <Container>
                    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.25rem', color: colors.text, maxWidth: '48rem', margin: '0 auto' }}>
                            We operate across diverse critical sectors, delivering specialized instrumentation and automation solutions tailored to the unique demands of each industry.
                        </p>
                    </div>

                    <CategoryContainer>
                        {CATEGORIES.map((category) => {
                            // Find full industry objects for the sub-industries in this category
                            const subIndustries = category.subIndustries
                                .map(id => INDUSTRIES.find(ind => ind.id === id))
                                .filter(Boolean);

                            return (
                                <CategoryItem key={category.id} id={category.id}>
                                    <CategoryHeader
                                        $isOpen={openCategoryId === category.id}
                                        onClick={() => toggleCategory(category.id)}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                            <img
                                                src={category.image}
                                                alt=""
                                                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                                            />
                                            <div>
                                                <CategoryTitle>{category.title}</CategoryTitle>
                                                <p style={{ color: colors.textLight, marginTop: '0.5rem', fontSize: '1rem' }}>{category.description}</p>
                                            </div>
                                        </div>
                                        <ArrowIcon $isOpen={openCategoryId === category.id}>▼</ArrowIcon>
                                    </CategoryHeader>

                                    <CategoryContent $isOpen={openCategoryId === category.id}>
                                        <ContentWrapper>
                                            {subIndustries.length > 0 ? (
                                                <Grid smCols={1} lgCols={3} gap="2rem">
                                                    {subIndustries.map((sub: any) => (
                                                        <Link key={sub.id} href={`/industries/${sub.id}`} passHref legacyBehavior>
                                                            <SubIndustryLink>
                                                                <GlassCard style={{ height: '100%', cursor: 'pointer', transition: 'transform 0.2s', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                                                    <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                                                                        <img
                                                                            src={sub.image}
                                                                            alt={sub.title}
                                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                                        />
                                                                    </div>
                                                                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: colors.primary }}>
                                                                            {sub.title}
                                                                        </h3>
                                                                        <p style={{ fontSize: '0.875rem', color: colors.textLight }}>
                                                                            {sub.description}
                                                                        </p>
                                                                    </div>
                                                                </GlassCard>
                                                            </SubIndustryLink>
                                                        </Link>
                                                    ))}
                                                </Grid>
                                            ) : (
                                                <div style={{ textAlign: 'center', padding: '2rem', color: colors.textLight, fontStyle: 'italic' }}>
                                                    Detailed sector applications coming soon.
                                                </div>
                                            )}
                                        </ContentWrapper>
                                    </CategoryContent>
                                </CategoryItem>
                            );
                        })}
                    </CategoryContainer>
                </Container>
            </Section>
        </main>
    );
}

export default IndustriesPage;
