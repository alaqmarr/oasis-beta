import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../themes/colors';
import { Industry } from '../types';
import { Product } from '../data/products';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
  animation: ${fadeIn} 0.3s ease;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background: #FFFFFF;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  width: 95%;
  max-width: 600px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  text-align: center;
  min-height: 450px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${colors.textLight};
  z-index: 20;
  &:hover { color: ${colors.primary}; }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${colors.textLight};
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const ProductsContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 350px;
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

interface IndustryProductsModalProps {
    isOpen: boolean;
    onClose: () => void;
    industry: Industry | null;
    products: Product[];
    onProductClick: (product: Product) => void;
}

export default function IndustryProductsModal({
    isOpen,
    onClose,
    industry,
    products,
    onProductClick
}: IndustryProductsModalProps) {
    if (!isOpen || !industry) return null;

    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>

                <Title>{industry.title}</Title>
                <Description>Select a product to enquire</Description>

                <ProductsContainer>
                    <ProductsCircle $count={products.length}>
                        {products.map((product, index) => {
                            const count = products.length;
                            const angle = (360 / count) * index - 90; // Start from top
                            const radius = count <= 4 ? 100 : count <= 6 ? 120 : 140;
                            return (
                                <ProductPill
                                    key={product.id}
                                    onClick={() => onProductClick(product)}
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
            </ModalContainer>
        </Overlay>
    );
}
