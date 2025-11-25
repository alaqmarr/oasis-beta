import styled from 'styled-components';
import { colors } from '@themes';

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

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10rem; // py-40
  padding-bottom: 10rem;
  background-color: ${props => props.bgColor || colors.background.light};
  color: ${props => props.textColor || colors.text};
`;

export const Grid = styled.div`
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

export const Button = styled.a`
  display: inline-block;
  padding: 1.25rem 2.5rem; // px-10 py-5
  background-color: ${props => props.variant === 'outline' ? 'transparent' : colors.primary};
  color: ${props => props.variant === 'outline' ? colors.primary : '#FFFFFF'};
  border: ${props => props.variant === 'outline' ? `2px solid ${colors.primary}` : 'none'};
  font-weight: 700;
  font-size: 1.125rem; // text-lg
  letter-spacing: 0.025em; // tracking-wide
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.variant === 'outline' ? colors.background.neutral : '#B91C1C'}; // hover:bg-red-700
    transform: scale(1.02);
  }
`;
