import styled from 'styled-components';
import { colors } from '../../themes/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px; // max-w-7xl
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem; // px-6
  padding-right: 1.5rem; // px-6

  @media (min-width: 1024px) {
    padding-left: 2rem; // lg:px-8
    padding-right: 2rem;
  }
`;

interface SectionProps {
  bgColor?: string;
  textColor?: string;
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: ${props => props.bgColor || colors.background.light};
  color: ${props => props.textColor || colors.text};

  @media (min-width: 1024px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
`;

interface GridProps {
  gap?: string;
  smCols?: number;
  lgCols?: number;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${props => props.gap || '2rem'};
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(${props => props.smCols || 1}, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${props => props.lgCols || 1}, 1fr);
  }
`;

interface ButtonProps {
  variant?: 'outline' | 'solid';
}

export const Button = styled.a<ButtonProps>`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${props => props.variant === 'outline' ? 'rgba(255, 255, 255, 0.1)' : colors.primary};
  color: ${props => props.variant === 'outline' ? colors.primary : '#FFFFFF'};
  border: ${props => props.variant === 'outline' ? `1px solid ${colors.primary}` : 'none'};
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.025em;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  backdrop-filter: ${props => props.variant === 'outline' ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.variant === 'outline' ? 'none' : '0 4px 14px 0 rgba(220, 38, 38, 0.39)'};
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.variant === 'outline' ? colors.primaryLight : '#B91C1C'};
    border-radius: 9999px;
    z-index: -2;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${props => props.variant === 'outline' ? colors.primary : '#991B1B'};
    transition: all 0.3s;
    border-radius: 9999px;
    z-index: -1;
  }

  &:hover {
    color: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: ${props => props.variant === 'outline' ? '0 4px 12px rgba(220, 38, 38, 0.2)' : '0 6px 20px rgba(220, 38, 38, 0.23)'};
    
    &::before {
      width: 100%;
    }
  }
`;

import { useTilt } from '../../hooks/useTilt';

const GlassCardStyled = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  transition: transform 0.1s ease-out, box-shadow 0.4s ease; // Faster transform for tilt
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d; // Enable 3D space

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: 0.5s;
    pointer-events: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.8);

    &::before {
      left: 100%;
    }
  }
`;

export const GlassCard = ({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) => {
  const { values, onMouseMove, onMouseLeave } = useTilt(5); // 5 degrees max tilt

  return (
    <GlassCardStyled
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        ...style,
        transform: values.transform,
      }}
      className={className}
    >
      {children}
    </GlassCardStyled>
  );
};
