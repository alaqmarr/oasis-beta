import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, Button } from '../../components/ui';
import { PRODUCTS } from '../../data/products';

const HeroSection = styled.section`
  width: 100%;
  height: 60vh;
  position: relative;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920');
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
  font-size: 5rem;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: -0.025em;
  text-align: center;
  text-shadow: 0 4px 6px rgba(0,0,0,0.3);
`;

const CategoryCard = styled.a`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid #FECACA;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(220, 38, 38, 0.1), 0 10px 10px -5px rgba(220, 38, 38, 0.04);

    h3 {
      color: ${colors.primary};
    }
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-color: #FEF2F2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 3rem;
`;

const CardContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  transition: color 0.3s;
  color: ${colors.text};
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: ${colors.text};
  line-height: 1.5;
  margin-bottom: 2rem;
  flex: 1;
`;

const ArrowLink = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.primary};
`;

function ProductsPage() {
  return (
    <main>
      <HeroSection>
        <HeroTitle>Our Products</HeroTitle>
      </HeroSection>

      <Section>
        <Container>
          <div style={{ marginBottom: '6rem', textAlign: 'center', maxWidth: '56rem', margin: '0 auto 6rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Comprehensive Industrial Solutions</h2>
            <p style={{ fontSize: '1.25rem', color: colors.text, fontWeight: '300' }}>
              Explore our extensive range of high-performance instrumentation and automation products designed for the most demanding industrial environments.
            </p>
          </div>

          <Grid smCols={2} lgCols={3} gap="2rem">
            {PRODUCTS.map(product => (
              <Link key={product.id} href={`/products/${product.id}`} passHref legacyBehavior>
                <CategoryCard>
                  <CardImage>
                    {/* Placeholder for product image */}
                    <span>⚙️</span>
                  </CardImage>
                  <CardContent>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDesc>{product.description}</CardDesc>
                    <ArrowLink>View Details →</ArrowLink>
                  </CardContent>
                </CategoryCard>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section bgColor={colors.primary} textColor="#FFFFFF">
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>Need a Custom Solution?</h2>
            <p style={{ fontSize: '1.5rem', color: '#FECACA', fontWeight: '300', maxWidth: '48rem', marginBottom: '4rem' }}>
              Our engineering team can design and build bespoke systems tailored to your specific operational requirements.
            </p>
            <Link href="/contact" passHref legacyBehavior>
              <Button style={{ backgroundColor: '#FFFFFF', color: colors.primary }}>Contact Engineering Team</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default ProductsPage;
