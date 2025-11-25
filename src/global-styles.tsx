import { createGlobalStyle } from 'styled-components';
import { colors } from './themes/colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  html,
  body {
    -webkit-overflow-scrolling: touch !important;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${colors.text};
    line-height: 1.5;
    overflow-x: hidden;
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    background-color: ${colors.background.light};
    min-height: 100%;
    min-width: 100%;
  }

  #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
