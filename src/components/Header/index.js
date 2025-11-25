import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@themes';
import { Container, Button } from '../ui';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: ${colors.background.light};
  border-bottom: 1px solid #E5E5E5;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem; // h-20
`;

const Logo = styled.a`
  font-size: 1.25rem; // text-xl
  font-weight: 700;
  color: ${colors.text};
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 2.5rem; // gap-10

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  font-size: 0.875rem; // text-sm
  font-weight: 600;
  letter-spacing: 0.025em;
  color: #525252; // text-neutral-600
  transition: color 0.2s;
  text-transform: uppercase;

  &:hover {
    color: ${colors.primary};
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <NavContent>
          <Link href="/" passHref legacyBehavior>
            <Logo>Oasis Group</Logo>
          </Link>

          <NavLinks>
            <Link href="/" passHref legacyBehavior><NavLink>Home</NavLink></Link>
            <Link href="/about" passHref legacyBehavior><NavLink>About</NavLink></Link>
            <Link href="/products" passHref legacyBehavior><NavLink>Products</NavLink></Link>
            <Link href="/industries" passHref legacyBehavior><NavLink>Industries</NavLink></Link>
            <Link href="/contact" passHref legacyBehavior>
                <Button as="a" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>Contact Us</Button>
            </Link>
          </NavLinks>
        </NavContent>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
