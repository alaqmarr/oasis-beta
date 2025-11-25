import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { colors } from '../themes/colors';
import { Container, Button } from './ui';
import { LiquidText } from './ui/LiquidText';
import { Reveal } from './Reveal';

const move = keyframes`
  from { transform: translate(0, 0) rotate(0deg); }
  to { transform: translate(0, 0) rotate(360deg); }
`;

const morph = keyframes`
  0% { border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
  100% { border-radius: 40% 60%; }
`;

const HeroWrapper = styled.section`
  width: 100%;
  min-height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${colors.background.light};
`;

const BlobContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Blob = styled.div<{ $top: string; $left: string; $color: string; $size: string; $duration: string; $delay: string }>`
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};
  width: ${props => props.$size};
  height: ${props => props.$size};
  background: ${props => props.$color};
  border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
  animation: ${move} ${props => props.$duration} linear infinite;
  opacity: 0.6;
  filter: blur(60px);
  mix-blend-mode: multiply;
  transform-origin: center center;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.text};
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;
  backdrop-filter: blur(2px);
`;

export default function LiquidHero() {
  return (
    <HeroWrapper>
      <BlobContainer>
        <Blob $top="-10%" $left="-10%" $color="#FECACA" $size="600px" $duration="25s" $delay="0s" />
        <Blob $top="20%" $left="60%" $color="#FEE2E2" $size="500px" $duration="30s" $delay="-5s" />
        <Blob $top="60%" $left="10%" $color="#FEF2F2" $size="700px" $duration="35s" $delay="-10s" />
      </BlobContainer>

      <Container>
        <Content>
          <Reveal>
            <HeroTitle>
              <LiquidText>Precision Engineering</LiquidText> <br />
              <span style={{ color: colors.text }}>for Critical Industries</span>
            </HeroTitle>
          </Reveal>

          <Reveal delay={0.2}>
            <HeroSubtitle>
              Oasis Group delivers advanced instrumentation and automation solutions that power the world's most demanding sectors.
            </HeroSubtitle>
          </Reveal>

          <Reveal delay={0.4}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/products" passHref legacyBehavior>
                <Button>Explore Products</Button>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </Reveal>
        </Content>
      </Container>
    </HeroWrapper>
  );
}
