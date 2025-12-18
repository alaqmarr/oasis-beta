import React, { useState, useEffect } from 'react';
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
  backdrop-filter: blur(8px);
`;

const ModalContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 2.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${colors.text};
  margin-bottom: 2rem;
  font-size: 0.875rem;
  line-height: 1.6;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

const MessageArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

export default function EnquiryModal() {
  const { isModalOpen, closeEnquiryModal, modalContent } = useEnquiry();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isModalOpen) {
      const storedInfo = localStorage.getItem('oasis_user_info');
      if (storedInfo) {
        const { name, email } = JSON.parse(storedInfo);
        setFormData(prev => ({ ...prev, name, email }));
      }
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'ENQUIRY',
          data: {
            ...formData,
            page: router.asPath,
            subject: modalContent.subject
          }
        }),
      });

      if (response.ok) {
        setSuccess(true);
        // Save info for future if not exists
        if (!localStorage.getItem('oasis_user_info')) {
          localStorage.setItem('oasis_user_info', JSON.stringify({
            name: formData.name,
            email: formData.email
          }));
        }

        setTimeout(() => {
          closeEnquiryModal();
          setSuccess(false);
          setFormData({ name: '', email: '', company: '', phone: '', message: '' });
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
            <Title>{modalContent.title || 'Get in Touch'}</Title>
            <Description>
              {modalContent.description || 'Fill out the form below and our team will get back to you.'}
            </Description>

            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={e => setFormData({ ...formData, company: e.target.value })}
              />
              <Input
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />

              <MessageArea
                placeholder="Your Message..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
              />

              <Button as="button" type="submit" style={{ width: '100%' }} disabled={loading}>
                {loading ? 'Sending...' : 'Submit Enquiry'}
              </Button>
            </form>
          </>
        )}
      </ModalContainer>
    </Overlay>
  );
}
