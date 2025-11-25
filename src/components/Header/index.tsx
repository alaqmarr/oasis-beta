import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../../themes/colors';
import { Container, Button } from '../ui';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 1280px;
  height: 4rem;
  background-color: rgba(220, 38, 38, 0.65); // Red 600 with transparency
  backdrop-filter: blur(20px) saturate(180%); // High blur + saturation for "liquid" feel
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3); // Glassy white border
  border-radius: 9999px;
  z-index: 50;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 30px rgba(0, 0, 0, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.2); // Inner glow for liquid depth
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  color: #FFFFFF; // White for contrast on red
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.9); // White text
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5); // Glow on hover
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 60;
  
  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #FFFFFF; // White bars
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }
`;

const MobileNavOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 55;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.text};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
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
              <img src="/oasis-logo.jpg" alt="Oasis Group Logo" style={{ height: '2.5rem', borderRadius: '4px' }} />
            </Logo>
          </Link>

          <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
            <div style={{ transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0)' }} />
            <div style={{ opacity: isMenuOpen ? '0' : '1', transform: isMenuOpen ? 'translateX(20px)' : 'translateX(0)' }} />
            <div style={{ transform: isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)' }} />
          </MobileMenuButton>

          <NavLinks>
            <Link href="/" passHref legacyBehavior><NavLink>Home</NavLink></Link>
            <Link href="/about" passHref legacyBehavior><NavLink>About Us</NavLink></Link>
            <Link href="/industries" passHref legacyBehavior><NavLink>Industries</NavLink></Link>
            <Link href="/products" passHref legacyBehavior><NavLink>Products</NavLink></Link>
            <Link href="/contact" passHref legacyBehavior>
              <Button style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>Contact Us</Button>
            </Link>
          </NavLinks>

          <MobileNavOverlay $isOpen={isMenuOpen}>
            <Link href="/" passHref legacyBehavior><MobileNavLink onClick={toggleMenu}>Home</MobileNavLink></Link>
            <Link href="/about" passHref legacyBehavior><MobileNavLink onClick={toggleMenu}>About Us</MobileNavLink></Link>
            <Link href="/industries" passHref legacyBehavior><MobileNavLink onClick={toggleMenu}>Industries</MobileNavLink></Link>
            <Link href="/products" passHref legacyBehavior><MobileNavLink onClick={toggleMenu}>Products</MobileNavLink></Link>
            <Link href="/contact" passHref legacyBehavior>
              <Button onClick={toggleMenu} style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Contact Us</Button>
            </Link>
          </MobileNavOverlay>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
