import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { colors } from '../../themes/colors';
import { Container, Section, Button } from '../../components/ui';
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

const ProductsContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    min-height: 400px;
  }
`;

const ProductsCircle = styled.div<{ $count: number }>`
  position: relative;
  width: 280px;
  height: 280px;
  
  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

const ProductPill = styled.button<{ $angle: number; $radius: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${props => {
    const angleRad = (props.$angle * Math.PI) / 180;
    const x = Math.cos(angleRad) * props.$radius;
    const y = Math.sin(angleRad) * props.$radius;
    return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }};
  background: #FFFFFF;
  border: 2px solid ${colors.primary};
  border-radius: 50%;
  width: 90px;
  height: 90px;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${colors.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
    font-size: 0.875rem;
  }

  &:hover {
    background: ${colors.primary};
    color: #FFFFFF;
    transform: ${props => {
    const angleRad = (props.$angle * Math.PI) / 180;
    const x = Math.cos(angleRad) * props.$radius;
    const y = Math.sin(angleRad) * props.$radius;
    return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.1)`;
  }};
    box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
    z-index: 10;
  }

  &:active {
    transform: ${props => {
    const angleRad = (props.$angle * Math.PI) / 180;
    const x = Math.cos(angleRad) * props.$radius;
    const y = Math.sin(angleRad) * props.$radius;
    return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
  }};
  }
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

  // All keywords for SEO (same on every page)
  const allKeywords = 'speed sensors, vibration sensors, temperature sensors, temperature transmitters, pressure sensors, pressure transmitters, flow meters, level transmitters, limit switches, vacuum contactors, remote monitoring system, condition monitoring, predictive maintenance, automotive sensors, railway instrumentation, oil and gas instrumentation, thermal power sensors, nuclear power instrumentation, hydel power sensors, wind energy sensors, defence sensors, mining instrumentation, steel plant sensors, energy storage monitoring, water treatment sensors, industrial instrumentation, automation solutions, industrial sensors India, precision engineering, process control, safety systems, Oasis Group';

  return (
    <main>
      <Head>
        <title>{industry.title} Instrumentation & Sensors | Oasis Group</title>
        <meta name="description" content={`${industry.description} Oasis Group provides ${products.map(p => p.name).join(', ')} for ${industry.title.toLowerCase()} applications. Leading industrial instrumentation supplier in India.`} />
        <meta name="keywords" content={allKeywords} />
        <link rel="canonical" href={`https://oasisgroup.com/industries/${industry.id}`} />
        <meta property="og:title" content={`${industry.title} Solutions | Oasis Group`} />
        <meta property="og:description" content={industry.description} />
      </Head>
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
              <ProductsContainer>
                <ProductsCircle $count={products.length}>
                  {products.map((product, index) => {
                    const count = products.length;
                    const angle = (360 / count) * index - 90; // Start from top
                    const radius = count <= 4 ? 100 : count <= 6 ? 120 : 140;
                    return (
                      <ProductPill
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                        type="button"
                        $angle={angle}
                        $radius={radius}
                      >
                        {product.name}
                      </ProductPill>
                    );
                  })}
                </ProductsCircle>
              </ProductsContainer>
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
