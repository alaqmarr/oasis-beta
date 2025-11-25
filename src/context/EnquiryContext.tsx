import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface EnquiryContextType {
  userEmail: string | null;
  isModalOpen: boolean;
  modalContent: ModalContent;
  openEnquiryModal: (content?: Partial<ModalContent>) => void;
  closeEnquiryModal: () => void;
  setUserEmail: (email: string) => void;
  hasSubmitted: boolean;
}

interface ModalContent {
  title: string;
  description: string;
  subject?: string;
  productImage?: string;
  relatedProducts?: Array<{ id: string; title: string; image: string }>;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [userEmail, setUserEmailState] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    title: 'Request a Quote',
    description: 'Please enter your email address to receive more information.',
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem('oasis_user_email');
    if (storedEmail) {
      setUserEmailState(storedEmail);
      setHasSubmitted(true);
    }
  }, []);

  const setUserEmail = (email: string) => {
    setUserEmailState(email);
    localStorage.setItem('oasis_user_email', email);
    setHasSubmitted(true);
  };

  const openEnquiryModal = (content?: Partial<ModalContent>) => {
    if (content) {
      setModalContent({ ...modalContent, ...content });
    }
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
  };

  return (
    <EnquiryContext.Provider
      value={{
        userEmail,
        isModalOpen,
        modalContent,
        openEnquiryModal,
        closeEnquiryModal,
        setUserEmail,
        hasSubmitted,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (context === undefined) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
