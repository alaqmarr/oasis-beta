import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Link from 'next/link';
import { colors } from '../themes/colors';
import { Container, Button } from './ui';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(1.1); }
  to { opacity: 1; transform: scale(1); }
`;

const CarouselWrapper = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  background-color: ${colors.background.dark};
`;

const Slide = styled.div<{ $active: boolean; $image: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props => props.$image});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.$active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
  z-index: 0;

  ${props => props.$active && css`
    animation: ${fadeIn} 6s ease-out forwards;
  `}
`;

const StaticContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  pointer-events: none; // Allow clicks to pass through to indicators if needed, but buttons need pointer-events: auto
`;

const ContentContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  max-width: 800px;
  color: #FFFFFF;
  pointer-events: auto; // Re-enable clicks for content
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  color: #FFFFFF;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  color: #FFFFFF;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 20;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  background-color: ${props => (props.$active ? '#FFFFFF' : 'transparent')};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SLIDES = [
  { id: 1, image: '/images/1.jpg' },
  { id: 2, image: '/images/2.jpg' },
  { id: 3, image: '/images/3.jpg' }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CarouselWrapper>
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <Slide
          key={slide.id}
          $active={index === currentSlide}
          $image={slide.image}
        />
      ))}

      {/* Static Content Overlay */}
      <StaticContentWrapper>
        <ContentContainer>
          <Content>
            <Title>
              Precision Engineering <br />
              for Critical Industries
            </Title>
            <Subtitle>
              Delivering advanced instrumentation and automation solutions that power the world's most demanding sectors since 1974.
            </Subtitle>
            <ButtonGroup>
              <Link href="/industries" passHref legacyBehavior>
                <Button>Explore Industries</Button>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Button variant="outline" style={{ borderColor: '#FFFFFF' }}>Contact Us</Button>
              </Link>
            </ButtonGroup>
          </Content>
        </ContentContainer>
      </StaticContentWrapper>

      {/* Indicators */}
      <Indicators>
        {SLIDES.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Indicators>
    </CarouselWrapper>
  );
}
