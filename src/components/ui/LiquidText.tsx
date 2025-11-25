import styled, { keyframes } from 'styled-components';
import { colors } from '../../themes/colors';

const flow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const LiquidText = styled.span`
  background: linear-gradient(
    300deg,
    ${colors.primary},
    #EF4444,
    #F87171,
    ${colors.primary}
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${flow} 5s ease infinite;
  display: inline-block;
`;
