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
import PageHeader from '../../components/PageHeader';

const Breadcrumb = styled.div`
  font-size: 0.75rem;
  color: #FECACA;
  margin-bottom: 1rem;
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

const ProductsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const ProductsCircle = styled.div<{ $count: number }>`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px dashed ${colors.primary}40;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 60s linear infinite;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }

  &::before {
    content: 'Oasis Products';
    position: absolute;
    font-weight: 700;
    color: ${colors.primary};
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ProductPill = styled.button<{ $angle: number; $radius: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props => {
    const angleRad = (props.$angle * Math.PI) / 180;
    const x = Math.cos(angleRad) * props.$radius;
    const y = Math.sin(angleRad) * props.$radius;
    return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }};
  background: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid ${colors.border || '#e5e7eb'};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  color: ${colors.text};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 5;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.75rem;
  
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

  // All keywords for SEO (same on every page)
  const allKeywords = 'speed sensors, vibration sensors, temperature sensors, temperature transmitters, pressure sensors, pressure transmitters, flow meters, level transmitters, limit switches, vacuum contactors, remote monitoring system, condition monitoring, predictive maintenance, automotive sensors, railway instrumentation, oil and gas instrumentation, thermal power sensors, nuclear power instrumentation, hydel power sensors, wind energy sensors, defence sensors, mining instrumentation, steel plant sensors, energy storage monitoring, water treatment sensors, industrial instrumentation, automation solutions, industrial sensors India, precision engineering, process control, safety systems, Oasis Group';

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
      <Head>
        <title>{industry.title} Instrumentation & Sensors | Oasis Group</title>
        <meta name="description" content={`${industry.description} Oasis Group provides ${products.map(p => p.name).join(', ')} for ${industry.title.toLowerCase()} applications. Leading industrial instrumentation supplier in India.`} />
        <meta name="keywords" content={allKeywords} />
        <link rel="canonical" href={`https://oasisgroup.com/industries/${industry.id}`} />
        <meta property="og:title" content={`${industry.title} Solutions | Oasis Group`} />
        <meta property="og:description" content={industry.description} />
      </Head>

      <PageHeader
        title={industry.title}
        subtitle={industry.description}
        bgImage={industry.image || `https://placehold.co/1920x800/dc2626/ffffff?text=${industry.title.replace(/\s+/g, '+')}`}
      >
        <Breadcrumb>
          <Link href="/" passHref legacyBehavior><a>Home</a></Link>
          <span>/</span>
          <Link href="/industries" passHref legacyBehavior><a>Industries</a></Link>
          <span>/</span>
          {industry.title}
        </Breadcrumb>
      </PageHeader>

      <Section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
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

      <Section bgColor={colors.primary} textColor="#FFFFFF" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
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
