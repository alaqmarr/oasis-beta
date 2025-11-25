import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, Button } from '../../components/ui';
import { PRODUCTS } from '../../data/products';
import { useEnquiry } from '../../context/EnquiryContext';

const HeroSection = styled.section`
  width: 100%;
  padding: 12rem 0 6rem;
  background-color: ${colors.primary};
  color: #FFFFFF;
`;

const Breadcrumb = styled.div`
  font-size: 0.875rem;
  color: #FECACA;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  a {
    color: #FFFFFF;
    &:hover { color: #FECACA; }
  }
  
  span {
    margin: 0 0.5rem;
    color: #FECACA;
  }
`;

const ProductTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
`;

const ProductDesc = styled.p`
  font-size: 1.5rem;
  color: #FECACA;
  font-weight: 300;
  max-width: 48rem;
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  padding: 1.5rem 0;
  border-bottom: 1px solid #FECACA;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  &:first-child {
    border-top: 1px solid #FECACA;
  }
`;

const CheckIcon = styled.span`
  color: ${colors.primary};
  font-weight: 700;
  font-size: 1.25rem;
`;

const SpecTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #FECACA;
  }

  th {
    font-weight: 700;
    color: ${colors.text};
    width: 40%;
  }

  td {
    color: ${colors.text};
  }
`;

function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { openEnquiryModal } = useEnquiry();

  const product = PRODUCTS.find(p => p.id === slug);

  if (!product) {
    return (
      <Section>
        <Container>
          <h1>Product Not Found</h1>
          <Link href="/products" passHref legacyBehavior>
            <Button>Back to Products</Button>
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <main>
      <HeroSection>
        <Container>
          <Breadcrumb>
            <Link href="/" passHref legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/products" passHref legacyBehavior><a>Products</a></Link>
            <span>/</span>
            {product.title}
          </Breadcrumb>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDesc>{product.description}</ProductDesc>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <div style={{ marginBottom: '6rem' }}>
            <Grid lgCols={2} gap="4rem" style={{ alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Product Overview</h2>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: colors.text }}>
                  {product.longDescription}
                </p>
              </div>
              <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                <img
                  src={product.image || `https://placehold.co/800x600/e2e8f0/1e293b?text=${product.title.replace(/\s+/g, '+')}`}
                  alt={product.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </Grid>
          </div>

          <Grid lgCols={2} gap="6rem">
            <div>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '2rem', color: colors.primary }}>Key Features</h2>
              <FeatureList>
                {product.features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <CheckIcon>✓</CheckIcon>
                    <span style={{ fontSize: '1.125rem', color: colors.text }}>{feature}</span>
                  </FeatureItem>
                ))}
              </FeatureList>
            </div>

            <div>
              <div style={{ padding: '3rem', backgroundColor: '#FEF2F2', border: '1px solid #FECACA' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: colors.primary }}>Technical Specifications</h3>
                <SpecTable>
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </SpecTable>

                <div style={{ marginTop: '3rem' }}>
                  <Button
                    as="button"
                    style={{ width: '100%', textAlign: 'center' }}
                    onClick={() => {
                      const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map(p => ({
                        id: p.id,
                        title: p.title,
                        image: p.image || `https://placehold.co/600x400/e2e8f0/1e293b?text=${p.title.replace(/\s+/g, '+')}`
                      }));

                      openEnquiryModal({
                        title: `Request Quote: ${product.title}`,
                        description: 'Please provide your email to receive a detailed quote for this product.',
                        subject: `Quote Request for ${product.title}`,
                        productImage: product.image || `https://placehold.co/800x600/e2e8f0/1e293b?text=${product.title.replace(/\s+/g, '+')}`,
                        relatedProducts
                      });
                    }}
                  >
                    Request Quote
                  </Button>
                </div>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: colors.primary }}>Related Products</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map(related => (
                    <li key={related.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #FECACA', paddingBottom: '1rem' }}>
                      <Link href={`/products/${related.id}`} passHref legacyBehavior>
                        <a style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          color: colors.text,
                          fontWeight: '600',
                          fontSize: '1.125rem'
                        }}>
                          {related.title}
                          <span style={{ color: colors.primary }}>→</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

export default ProductDetailPage;
