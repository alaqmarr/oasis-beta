/**
 * This file contains the application's colors.
 *
 * Define color here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

const primary = '#DC2626'; // Red 600
const primaryDark = '#991B1B'; // Red 800
const primaryLight = '#FEF2F2'; // Red 50
const secondary = '#DC2626'; // Red 600 (Replaces Black)
const text = '#450a0a'; // Dark Red/Brown for text (avoiding pure black)
const textLight = '#7f1d1d'; // Lighter Red/Brown
const white = '#FFFFFF';

const colors = {
  transparent: 'rgba(0,0,0,0)',
  text,
  textLight,
  primary,
  primaryDark,
  primaryLight,
  secondary,
  success: '#28a745',
  error: '#dc3545',
  transparent80: 'rgba(220, 38, 38, 0.2)', // Red transparent
  background: {
    light: white,
    dark: primary, // Dark mode/Dark backgrounds become Red
    neutral: primaryLight // Light gray becomes Light Red
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
module.exports = colors;
