import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../../themes/colors';
import { Container, Button } from '../ui';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: ${colors.primary};
  z-index: 50;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 800;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLinks = styled.div`
  display: none;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.9);
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
  }
`;

const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 60;
  
  @media (min-width: 768px) {
    display: none;
  }

  span {
    display: block;
    width: 1.5rem;
    height: 2px;
    background: #FFFFFF;
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translateY(0)' : 'translateY(-6px)'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? 0 : 1};
    }
    
    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translateY(0)' : 'translateY(6px)'};
    }
  }
`;

const MobileNavOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 5rem;
  left: 0;
  height: calc(100vh - 5rem);
  width: 100%;
  background: #FFFFFF;
  z-index: 55;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.text};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  padding: 1rem 0;
  border-bottom: 1px solid #F3F4F6;
  transition: color 0.2s;

  &:hover {
    color: ${colors.primary};
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <Link href="/" passHref legacyBehavior>
            <Logo>
              <img src="/oasis-logo.png" alt="Oasis Group Logo" style={{ height: '2.25rem', borderRadius: '4px' }} />
            </Logo>
          </Link>

          <MobileMenuButton $isOpen={isMenuOpen} onClick={toggleMenu} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </MobileMenuButton>

          <NavLinks>
            <Link href="/" passHref legacyBehavior><NavLink>Home</NavLink></Link>
            <Link href="/about" passHref legacyBehavior><NavLink>About Us</NavLink></Link>
            <Link href="/industries" passHref legacyBehavior><NavLink>Industries</NavLink></Link>
            <Link href="/contact" passHref legacyBehavior>
              <Button style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>Contact Us</Button>
            </Link>
          </NavLinks>

          <MobileNavOverlay $isOpen={isMenuOpen}>
            <Link href="/" passHref legacyBehavior><MobileNavLink onClick={toggleMenu}>Home</MobileNavLink></Link>
            <Link href="/about" passHref legacyBehavior><MobileNavLink onClick={toggleMenu}>About Us</MobileNavLink></Link>
            <Link href="/industries" passHref legacyBehavior><MobileNavLink onClick={toggleMenu}>Industries</MobileNavLink></Link>
            <Link href="/contact" passHref legacyBehavior>
              <Button onClick={toggleMenu} style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>Contact Us</Button>
            </Link>
          </MobileNavOverlay>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
