import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { colors } from '../themes/colors';
import { Container } from '../components/ui';

const MaintenanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9fafb;
  text-align: center;
  padding: 2rem;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${colors.primary}15; // 15% opacity
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: ${colors.primary};
  font-size: 2.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.125rem;
  color: ${colors.textLight};
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Footer = styled.div`
  margin-top: 4rem;
  font-size: 0.875rem;
  color: ${colors.textLight};
`;

export default function ServiceUnavailable() {
    return (
        <MaintenanceContainer>
            <Head>
                <title>Service Unavailable | Oasis Group</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <IconWrapper>
                🔧
            </IconWrapper>

            <Title>System Under Maintenance</Title>

            <Message>
                Our system is currently undergoing scheduled maintenance to improve performance and security.
                We apologize for the inconvenience and expect to be back online shortly.
            </Message>

            <Footer>
                &copy; {new Date().getFullYear()} Oasis Group. All rights reserved.
            </Footer>
        </MaintenanceContainer>
    );
}
