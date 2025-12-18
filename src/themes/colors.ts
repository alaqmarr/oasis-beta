const primary = '#DC2626'; // Red 600
const primaryDark = '#991B1B'; // Red 800
const primaryLight = '#FEF2F2'; // Red 50
const secondary = '#DC2626'; // Red 600 (Replaces Black)
const text = '#450a0a'; // Dark Red/Brown for text (avoiding pure black)
const textLight = '#7f1d1d'; // Lighter Red/Brown
const white = '#FFFFFF';

export const colors = {
  transparent: 'rgba(0,0,0,0)',
  text,
  textLight,
  primary,
  primaryDark,
  primaryLight,
  secondary,
  border: '#E5E7EB',
  success: '#28a745',
  error: '#dc3545',
  transparent80: 'rgba(220, 38, 38, 0.2)', // Red transparent
  background: {
    light: white,
    dark: primary, // Dark mode/Dark backgrounds become Red
    neutral: primaryLight // Light gray becomes Light Red
  },
  glass: 'rgba(255, 255, 255, 0.7)',
  glassBorder: 'rgba(255, 255, 255, 0.5)',
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
  },
  theme: {
    lightMode: {
      primary,
      secondary,
      background: white
    },
    darkMode: {
      primary: secondary,
      secondary: primary,
      background: primary
    }
  }
};
