import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../themes/colors';
import { Button } from './ui';
import { useRouter } from 'next/router';
import { INDUSTRIES } from '../data/industries';
import { Product, getIndustriesForProduct } from '../data/products';

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
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 450px;
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
  font-size: 1.375rem;
  font-weight: 800;
  color: ${colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.4;

  span {
    color: ${colors.primary};
  }
`;

const Description = styled.p`
  color: ${colors.textLight};
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.6;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
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
    const [formData, setFormData] = useState({
        email: '',
        industryId: currentIndustryId || '',
        others: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    // Get industries this product is used for
    const relevantIndustryIds = product ? getIndustriesForProduct(product.id) : [];
    const relevantIndustries = INDUSTRIES.filter(ind => relevantIndustryIds.includes(ind.id));

    // If no specific mapping, show all industries
    const industriesToShow = relevantIndustries.length > 0 ? relevantIndustries : INDUSTRIES;

    // Get current industry name for display
    const currentIndustry = INDUSTRIES.find(i => i.id === currentIndustryId);

    useEffect(() => {
        if (isOpen) {
            const storedInfo = localStorage.getItem('oasis_user_info');
            if (storedInfo) {
                const { email } = JSON.parse(storedInfo);
                setFormData(prev => ({ ...prev, email: email || '', industryId: currentIndustryId || '' }));
            } else {
                setFormData(prev => ({ ...prev, industryId: currentIndustryId || '' }));
            }
        }
    }, [isOpen, currentIndustryId]);

    if (!isOpen || !product) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const selectedIndustry = INDUSTRIES.find(i => i.id === formData.industryId);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'PRODUCT_ENQUIRY',
                    data: {
                        email: formData.email,
                        product: product.name,
                        industry: selectedIndustry?.title || 'Not specified',
                        others: formData.others || 'None',
                        page: router.asPath,
                        subject: `Product Enquiry: ${product.name} for ${selectedIndustry?.title || 'Unspecified Industry'}`
                    }
                }),
            });

            if (response.ok) {
                setSuccess(true);
                localStorage.setItem('oasis_user_info', JSON.stringify({ email: formData.email }));

                setTimeout(() => {
                    onClose();
                    setSuccess(false);
                    setFormData({ email: '', industryId: '', others: '' });
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
        <Overlay onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>

                {success ? (
                    <div style={{ padding: '1rem 0' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                        <QuestionTitle>Enquiry Sent!</QuestionTitle>
                        <Description>Our team will contact you shortly about {product.name}.</Description>
                    </div>
                ) : (
                    <>
                        <QuestionTitle>
                            Are you interested in <span>{product.name}</span> for <span>{currentIndustry?.title || 'your industry'}</span>?
                        </QuestionTitle>

                        <form onSubmit={handleSubmit}>
                            <Label>Email Address *</Label>
                            <Input
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                required
                            />

                            <Label>Industry *</Label>
                            <Select
                                value={formData.industryId}
                                onChange={e => setFormData({ ...formData, industryId: e.target.value })}
                                required
                            >
                                <option value="">Select your industry</option>
                                {industriesToShow.map(ind => (
                                    <option key={ind.id} value={ind.id}>{ind.title}</option>
                                ))}
                            </Select>

                            <Label>Others (Optional)</Label>
                            <TextArea
                                placeholder="Any specific requirements or questions..."
                                value={formData.others}
                                onChange={e => setFormData({ ...formData, others: e.target.value })}
                            />

                            <Button as="button" type="submit" style={{ width: '100%' }} disabled={loading}>
                                {loading ? 'Sending...' : 'Yes, Send Enquiry'}
                            </Button>
                        </form>
                    </>
                )}
            </ModalContainer>
        </Overlay>
    );
}
