import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../themes/colors';
import { Button } from './ui';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background-color: #FFFFFF;
  border-radius: 1rem;
  padding: 2.5rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${colors.textLight};
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.5;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primaryLight}40;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${colors.textLight};
  cursor: pointer;
  
  &:hover {
    color: ${colors.text};
  }
`;

export default function UserCaptureModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Check if user has already submitted info
        const hasUserInfo = localStorage.getItem('oasis_user_info');

        // Check duplication for Page Visit email
        const lastVisitSent = localStorage.getItem('oasis_last_visit_sent');
        const now = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (!hasUserInfo) {
            // Show modal after a short delay if no info is stored
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            // If user info exists, check if we need to send a "Page Visit" email
            if (!lastVisitSent || (now - parseInt(lastVisitSent)) > twentyFourHours) {
                const userInfo = JSON.parse(hasUserInfo);
                sendVisitEmail(userInfo.name, userInfo.email);
            }
        }
    }, []);

    const sendVisitEmail = async (visitorName: string, visitorEmail: string) => {
        try {
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'VISIT',
                    data: {
                        name: visitorName,
                        email: visitorEmail,
                        page: window.location.pathname
                    }
                })
            });
            localStorage.setItem('oasis_last_visit_sent', Date.now().toString());
        } catch (error) {
            console.error('Failed to send visit email:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Save to localStorage
        const userInfo = { name, email };
        localStorage.setItem('oasis_user_info', JSON.stringify(userInfo));

        // Send email
        await sendVisitEmail(name, email);

        setIsLoading(false);
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
        // Don't ask again this session? Or set a flag to ask later?
        // User requested "ensure enquiry dialog does not popup too frequently", 
        // assuming similar courtesy for this one.
        // For now, let's just close it. It will reappear on reload if not saved.
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContent>
                <CloseButton onClick={handleClose}>×</CloseButton>
                <Title>Welcome to Oasis Group</Title>
                <Description>
                    Please provide your details to access our full catalog and receive updates on our latest sensing solutions.
                </Description>
                <form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Label htmlFor="visitor-name">Full Name</Label>
                        <Input
                            id="visitor-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="visitor-email">Email Address</Label>
                        <Input
                            id="visitor-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@company.com"
                        />
                    </InputGroup>
                    <Button as="button" type="submit" disabled={isLoading} style={{ width: '100%' }}>
                        {isLoading ? 'Processing...' : 'Continue'}
                    </Button>
                </form>
            </ModalContent>
        </Overlay>
    );
}
