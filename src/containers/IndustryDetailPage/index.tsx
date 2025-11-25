import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, Button } from '../../components/ui';
import { INDUSTRIES } from '../../data/industries';
import { PRODUCTS } from '../../data/products';

const HeroSection = styled.section`
  width: 100%;
  padding: 12rem 0 6rem;
  background-color: ${colors.primary};
  color: #FFFFFF;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${colors.primary};
  opacity: 0.1;
  background-image: radial-gradient(#FFFFFF 1px, transparent 1px);
  background-size: 20px 20px;
`;

const Breadcrumb = styled.div`
  font-size: 0.875rem;
  color: #FECACA;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 10;

  a {
    color: #FFFFFF;
    &:hover { color: #FECACA; }
  }
  
  span {
    margin: 0 0.5rem;
    color: #FECACA;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
  position: relative;
  z-index: 10;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #FECACA;
  font-weight: 300;
  max-width: 48rem;
  line-height: 1.6;
  position: relative;
  z-index: 10;
`;

const ContentCard = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #FECACA;
  padding: 3rem;
  height: 100%;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #FEF2F2;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${colors.text};
  font-size: 1.125rem;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '→';
    color: ${colors.primary};
    font-weight: 700;
  }
`;

function IndustryDetailPage() {
    const router = useRouter();
    const { slug } = router.query;

    const industry = INDUSTRIES.find(i => i.id === slug);

    if (!industry) {
        return (
            <Section>
                <Container>
                    <h1>Industry Not Found</h1>
                    <Link href="/industries" passHref legacyBehavior>
                        <Button>Back to Industries</Button>
                    </Link>
                </Container>
            </Section>
        );
    }

    return (
        <main>
            <HeroSection>
                <HeroBg />
                <Container>
                    <Breadcrumb>
                        <Link href="/" passHref legacyBehavior><a>Home</a></Link>
                        <span>/</span>
                        <Link href="/industries" passHref legacyBehavior><a>Industries</a></Link>
                        <span>/</span>
                        {industry.title}
                    </Breadcrumb>
                    <Title>{industry.title}</Title>
                    <Description>{industry.description}</Description>
                </Container>
            </HeroSection>

            <Section>
                <Container>
                    <div style={{ marginBottom: '6rem' }}>
                        <Grid lgCols={2} gap="4rem" style={{ alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Overview</h2>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: colors.text }}>
                                    {industry.longDescription}
                                </p>
                            </div>
                            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                                <img
                                    src={industry.image || `https://placehold.co/800x600/e2e8f0/1e293b?text=${industry.title.replace(/\s+/g, '+')}`}
                                    alt={industry.title}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </Grid>
                    </div>

                    <Grid lgCols={2} gap="4rem">
                        <ContentCard>
                            <h3 style={{ fontSize: '1.875rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Key Applications</h3>
                            <List>
                                {industry.applications.map(app => (
                                    <ListItem key={app}>{app}</ListItem>
                                ))}
                            </List>
                        </ContentCard>

                        <ContentCard>
                            <h3 style={{ fontSize: '1.875rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Recommended Products</h3>
                            <List>
                                {industry.products.map(prod => {
                                    // Try to find a matching product in our database
                                    const matchingProduct = PRODUCTS.find(p =>
                                        p.title.toLowerCase() === prod.toLowerCase() ||
                                        p.title.toLowerCase().includes(prod.toLowerCase()) ||
                                        prod.toLowerCase().includes(p.title.toLowerCase())
                                    );

                                    const href = matchingProduct ? `/products/${matchingProduct.id}` : '/products';

                                    return (
                                        <ListItem key={prod}>
                                            <Link href={href} passHref legacyBehavior>
                                                <a style={{ textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#FECACA' }}>
                                                    {prod}
                                                </a>
                                            </Link>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </ContentCard>
                    </Grid>
                </Container>
            </Section>

            <Section bgColor={colors.primary} textColor="#FFFFFF">
                <Container>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>Need a Solution for {industry.title}?</h2>
                        <p style={{ fontSize: '1.5rem', color: '#FECACA', marginBottom: '4rem' }}>
                            Contact our engineering team for a consultation tailored to your specific requirements.
                        </p>
                        <Link href="/contact" passHref legacyBehavior>
                            <Button style={{ backgroundColor: '#FFFFFF', color: colors.primary }}>Get in Touch</Button>
                        </Link>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

export default IndustryDetailPage;
