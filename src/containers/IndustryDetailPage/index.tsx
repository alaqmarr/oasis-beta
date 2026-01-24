import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { colors } from '../../themes/colors';
import { Container, Section, Grid, Button } from '../../components/ui';
import { INDUSTRIES } from '../../data/industries';
import { getProductsForIndustry, Product } from '../../data/products';
import ProductEnquiryModal from '../../components/ProductEnquiryModal';

const HeroSection = styled.section`
  width: 100%;
  padding: 8rem 0 4rem;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 10rem 0 5rem;
  }
`;

const HeroImage = styled.div<{ $bgImage?: string }>`
  position: absolute;
  inset: 0;
  background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-color: ${colors.primary};
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(153, 27, 27, 0.9) 0%, rgba(220, 38, 38, 0.85) 100%);
`;

const Breadcrumb = styled.div`
  font-size: 0.75rem;
  color: #FECACA;
  margin-bottom: 1.5rem;
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
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  position: relative;
  z-index: 10;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #FECACA;
  font-weight: 300;
  max-width: 48rem;
  line-height: 1.6;
  position: relative;
  z-index: 10;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: ${colors.primary};

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ProductCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  user-select: none;

  &:hover {
    border-color: ${colors.primary};
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ProductName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '→';
    color: ${colors.primary};
  }
`;

const ProductDesc = styled.p`
  font-size: 0.875rem;
  color: ${colors.textLight};
  line-height: 1.5;
`;

const ContentCard = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 1rem;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const OverviewText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${colors.text};

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CTATitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

function IndustryDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Get products for this industry
  const products = getProductsForIndustry(industry.id);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main>
      <HeroSection>
        <HeroImage $bgImage={industry.image || `https://placehold.co/1920x800/e2e8f0/1e293b?text=${industry.title.replace(/\s+/g, '+')}`} />
        <HeroOverlay />
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
          {/* Products Section */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <ContentCard>
              <SectionTitle style={{ textAlign: 'center' }}>Our Products for {industry.title}</SectionTitle>
              <p style={{ textAlign: 'center', color: colors.textLight, marginBottom: '2rem' }}>
                Click on a product to enquire about specifications and pricing.
              </p>
              <Grid smCols={1} lgCols={2} gap="1rem">
                {products.map(product => (
                  <ProductCard
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleProductClick(product)}
                  >
                    <ProductName>{product.name}</ProductName>
                    <ProductDesc>{product.description}</ProductDesc>
                  </ProductCard>
                ))}
              </Grid>
            </ContentCard>
          </div>
        </Container>
      </Section>

      <Section bgColor={colors.primary} textColor="#FFFFFF">
        <Container>
          <div style={{ textAlign: 'center' }}>
            <CTATitle>Need a Custom Solution for {industry.title}?</CTATitle>
            <p style={{ fontSize: '1rem', color: '#FECACA', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Our engineering team can customize products to meet your specific requirements.
            </p>
            <Link href="/contact" passHref legacyBehavior>
              <Button style={{ backgroundColor: '#FFFFFF', color: colors.primary }}>Contact Us</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Product Enquiry Modal */}
      <ProductEnquiryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
        currentIndustryId={industry.id}
      />
    </main >
  );
}

export default IndustryDetailPage;
