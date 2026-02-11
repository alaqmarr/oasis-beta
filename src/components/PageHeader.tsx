import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import { colors } from '../themes/colors';

const HeaderSection = styled.section<{ $bgImage: string }>`
  width: 100%;
  padding: 8rem 0 4rem;
  background-color: ${colors.primary};
  background-image: linear-gradient(90deg, rgba(220, 38, 38, 0.9) 0%, rgba(220, 38, 38, 0.8) 100%), url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 10rem 0 5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  color: #FFFFFF;
  text-align: left;
  max-width: 800px;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #FEF2F2; // Very Light Red/White
  font-weight: 300;
  max-width: 600px;
  line-height: 1.6;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, bgImage = '/images/about/factory-side.jpg', children }: PageHeaderProps) {
  return (
    <HeaderSection $bgImage={bgImage}>
      <Container>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Container>
    </HeaderSection>
  );
}
