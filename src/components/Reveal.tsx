import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
}

const RevealWrapper = styled.div<{ $isVisible: boolean; $delay: number }>`
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transform: translateY(${props => (props.$isVisible ? 0 : '75px')});
  transition: all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${props => props.$delay}s;
`;

export const Reveal = ({ children, width = 'fit-content', delay = 0 }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <RevealWrapper ref={ref} $isVisible={isVisible} $delay={delay} style={{ width }}>
            {children}
        </RevealWrapper>
    );
};
