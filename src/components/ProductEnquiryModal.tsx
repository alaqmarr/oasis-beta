import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../themes/colors';
import { Button } from './ui';
import { useRouter } from 'next/router';
import { INDUSTRIES } from '../data/industries';
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
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background: #FFFFFF;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  text-align: center;
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
  &:hover { color: ${colors.primary}; }
`;

const QuestionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.5;

  span {
    color: ${colors.primary};
    font-weight: 800;
  }
`;

const Label = styled.p`
  font-size: 1rem;
  color: ${colors.text};
  margin-bottom: 0.75rem;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem 0;
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SuccessTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const SuccessDescription = styled.p`
  color: ${colors.textLight};
  font-size: 0.875rem;
`;

interface ProductEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  currentIndustryId?: string;
}

export default function ProductEnquiryModal({
  isOpen,
  onClose,
  product,
  currentIndustryId
}: ProductEnquiryModalProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Get current industry name for display
  const currentIndustry = INDUSTRIES.find(i => i.id === currentIndustryId);

  useEffect(() => {
    if (isOpen) {
      const storedInfo = localStorage.getItem('oasis_user_info');
      if (storedInfo) {
        const { email: storedEmail } = JSON.parse(storedInfo);
        if (storedEmail) setEmail(storedEmail);
      }
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'PRODUCT_ENQUIRY',
          data: {
            email,
            product: product.name,
            industry: currentIndustry?.title || 'Not specified',
            page: router.asPath,
            subject: `Enquiry: ${currentIndustry?.title || 'Industry'} Standard Compliant ${product.name}`
          }
        }),
      });

      if (response.ok) {
        setSuccess(true);
        localStorage.setItem('oasis_user_info', JSON.stringify({ email }));

        setTimeout(() => {
          onClose();
          setSuccess(false);
          setEmail('');
        }, 2000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to send enquiry. Please try again.');
        setLoading(false);
        return;
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        {success ? (
          <SuccessMessage>
            <SuccessIcon>✅</SuccessIcon>
            <SuccessTitle>Enquiry Sent!</SuccessTitle>
            <SuccessDescription>Our team will contact you shortly.</SuccessDescription>
          </SuccessMessage>
        ) : (
          <>
            <QuestionTitle>
              Are you looking for <span>{currentIndustry?.title || 'Industry'}</span> Standard Compliant <span>{product.name}</span>?
            </QuestionTitle>

            <form onSubmit={handleSubmit}>
              <Label>Please share your Mail ID</Label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

              <Button as="button" type="submit" style={{ width: '100%' }} disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </>
        )}
      </ModalContainer>
    </Overlay>
  );
}
