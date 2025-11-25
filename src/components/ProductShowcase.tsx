import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../themes/colors';
import { Container, Grid, Button, GlassCard } from './ui';
import { PRODUCTS } from '../data/products';

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

const ProductImageContainer = styled.div`
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

export default function ProductShowcase() {
    // We'll showcase the first 3 products as "Featured"
    const featuredProducts = PRODUCTS.slice(0, 3);

    return (
        <ShowcaseSection>
            <Container>
                <SectionHeader>
                    <Badge>Innovation</Badge>
                    <Title>Featured Solutions</Title>
                    <Subtitle>
                        Discover our flagship instrumentation designed for precision and reliability in the most demanding environments.
                    </Subtitle>
                </SectionHeader>

                <Grid lgCols={3} gap="2rem">
                    {featuredProducts.map((product, index) => (
                        <Link key={product.id} href={`/products/${product.id}`} passHref legacyBehavior>
                            <a style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'block' }}>
                                <GlassCard style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <ProductImageContainer>
                                        <img
                                            src={product.image || `https://placehold.co/600x400/e2e8f0/1e293b?text=${product.title.replace(/\s+/g, '+')}`}
                                            alt={product.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </ProductImageContainer>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: colors.text }}>
                                        {product.title}
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', color: colors.textLight, lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                                        {product.description}
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
                                            View Specifications <span>→</span>
                                        </span>
                                    </div>
                                </GlassCard>
                            </a>
                        </Link>
                    ))}
                </Grid>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link href="/products" passHref legacyBehavior>
                        <Button variant="outline">Browse Full Catalog</Button>
                    </Link>
                </div>
            </Container>
        </ShowcaseSection>
    );
}
