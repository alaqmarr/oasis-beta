import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      transparent: string;
      text: string;
      textLight: string;
      primary: string;
      primaryDark: string;
      primaryLight: string;
      secondary: string;
      success: string;
      error: string;
      transparent80: string;
      background: {
        light: string;
        dark: string;
        neutral: string;
      };
      glass: string;
      glassBorder: string;
      shadow: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        glass: string;
      };
      theme: {
        lightMode: {
          primary: string;
          secondary: string;
          background: string;
        };
        darkMode: {
          primary: string;
          secondary: string;
          background: string;
        };
      };
    };
  }
}
