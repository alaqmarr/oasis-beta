import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@themes';
import { Container, Grid } from '../ui';

const FooterWrapper = styled.footer`
  background-color: ${colors.primary};
  color: #FFFFFF;
  border-top: 1px solid #B91C1C;
`;

const FooterContent = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled.a`
  display: block;
  font-size: 0.875rem;
  color: #FECACA; // Red-200
  margin-bottom: 1rem;
  transition: color 0.2s;

  &:hover {
    color: #FFFFFF;
  }
`;

const Copyright = styled.div`
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid #B91C1C;
  display: flex;
  justify-content: space-between;
  color: #FECACA; // Red-200
  font-size: 0.875rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <Grid smCols={2} lgCols={4} gap="3rem">
            <div>
              <ColumnTitle>Company</ColumnTitle>
              <Link href="/about" passHref legacyBehavior><FooterLink>About Us</FooterLink></Link>
              <Link href="/products" passHref legacyBehavior><FooterLink>Products</FooterLink></Link>
              <Link href="/industries" passHref legacyBehavior><FooterLink>Industries</FooterLink></Link>
              <Link href="/contact" passHref legacyBehavior><FooterLink>Contact</FooterLink></Link>
            </div>
            <div>
              <ColumnTitle>Divisions</ColumnTitle>
              <FooterLink as="span">Oasis Instruments Company</FooterLink>
              <FooterLink as="span">Oasis Valves & Pneumatics</FooterLink>
            </div>
            <div>
              <ColumnTitle>Certifications</ColumnTitle>
              <FooterLink as="span">ISO 9001:2015</FooterLink>
              <FooterLink as="span">MSME Registered</FooterLink>
            </div>
            <div>
              <ColumnTitle>Location</ColumnTitle>
              <FooterLink as="span">Genome Valley, Hyderabad</FooterLink>
            </div>
          </Grid>

          <Copyright>
            <p>© {new Date().getFullYear()} Oasis Group. All rights reserved.</p>
          </Copyright>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
