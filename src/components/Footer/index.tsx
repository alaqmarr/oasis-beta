import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../../themes/colors';
import { Container, Grid } from '../ui';

const FooterWrapper = styled.footer`
  background-color: ${colors.primary};
  color: #FFFFFF;
  padding: 5rem 0 2rem;
`;

const FooterLink = styled.a`
  display: block;
  color: #FECACA; // Red 200
  margin-bottom: 0.75rem;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
`;

const Copyright = styled.div`
  border-top: 1px solid #991B1B; // Red 800
  margin-top: 4rem;
  padding-top: 2rem;
  text-align: center;
  color: #FECACA;
  font-size: 0.875rem;
`;

function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <Grid smCols={2} lgCols={4} gap="3rem">
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <img src="/oasis-logo.jpg" alt="Oasis Group Logo" style={{ height: '3rem', borderRadius: '4px' }} />
                            OASIS GROUP
                        </div>
                        <p style={{ color: '#FECACA', lineHeight: '1.6' }}>
                            Pioneering industrial instrumentation and automation solutions since 1974.
                        </p>
                    </div>

                    <div>
                        <FooterTitle>Quick Links</FooterTitle>
                        <Link href="/" passHref legacyBehavior><FooterLink>Home</FooterLink></Link>
                        <Link href="/about" passHref legacyBehavior><FooterLink>About Us</FooterLink></Link>
                        <Link href="/industries" passHref legacyBehavior><FooterLink>Industries</FooterLink></Link>
                        <Link href="/products" passHref legacyBehavior><FooterLink>Products</FooterLink></Link>
                    </div>

                    <div>
                        <FooterTitle>Products</FooterTitle>
                        <Link href="/products/flow-meters" passHref legacyBehavior><FooterLink>Flow Meters</FooterLink></Link>
                        <Link href="/products/pressure-transmitters" passHref legacyBehavior><FooterLink>Pressure Transmitters</FooterLink></Link>
                        <Link href="/products/temperature-sensors" passHref legacyBehavior><FooterLink>Temperature Sensors</FooterLink></Link>
                        <Link href="/products/encoders" passHref legacyBehavior><FooterLink>Encoders</FooterLink></Link>
                    </div>

                    <div>
                        <FooterTitle>Contact</FooterTitle>
                        <p style={{ color: '#FECACA', marginBottom: '0.5rem' }}>Plot – 2, TSIIC Industrial Park</p>
                        <p style={{ color: '#FECACA', marginBottom: '0.5rem' }}>Genome Valley, Hyderabad</p>
                        <p style={{ color: '#FECACA', marginBottom: '0.5rem' }}>+91-91210 84141</p>
                        <p style={{ color: '#FECACA' }}>office@oasis-group.co.in</p>
                    </div>
                </Grid>

                <Copyright>
                    © {new Date().getFullYear()} Oasis Group. All rights reserved.
                </Copyright>
            </Container>
        </FooterWrapper>
    );
}

export default Footer;
