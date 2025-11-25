import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../themes/colors';
import { Button } from './ui';
import { useEnquiry } from '../context/EnquiryContext';
import { useRouter } from 'next/router';

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
  background-color: rgba(0, 0, 0, 0.3); // Lighter overlay
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
  backdrop-filter: blur(8px); // Stronger blur
`;

const ModalContainer = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 2.5rem;
  border-radius: 2rem; // More rounded
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 90%;
  max-width: 500px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1); // Apple-like spring
  position: relative;
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

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${colors.text};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.8);
    border-color: ${colors.primary};
    box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1);
  }
`;

const MessageArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.8);
    border-color: ${colors.primary};
    box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1);
  }
`;

export default function EnquiryModal() {
  const { isModalOpen, closeEnquiryModal, modalContent, setUserEmail, userEmail } = useEnquiry();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailToSend = userEmail || email;

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailToSend,
          subject: modalContent.subject || 'Website Enquiry',
          message: message,
          page: router.asPath,
          productImage: modalContent.productImage,
          relatedProducts: modalContent.relatedProducts,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        if (!userEmail) {
          setUserEmail(emailToSend);
        }
        setTimeout(() => {
          closeEnquiryModal();
          setSuccess(false);
          setMessage('');
        }, 2000);
      } else {
        alert('Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay onClick={closeEnquiryModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={closeEnquiryModal}>&times;</CloseButton>

        {success ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <Title>Enquiry Sent!</Title>
            <Description>We will get back to you shortly.</Description>
          </div>
        ) : (
          <>
            <Title>{modalContent.title}</Title>
            <Description>{modalContent.description}</Description>

            <form onSubmit={handleSubmit}>
              {!userEmail && (
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              )}

              <MessageArea
                placeholder="Any specific requirements? (Optional)"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />

              <Button as="button" type="submit" style={{ width: '100%' }} disabled={loading}>
                {loading ? 'Sending...' : 'Request Info'}
              </Button>
            </form>
          </>
        )}
      </ModalContainer>
    </Overlay>
  );
}
