import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    base: '#F8F8E6',
    black: '#000000',
    black100: '#1F1F1E',
    black90: '#1B1B1B',
    white: '#ffffff',
    gray50: 'rgba(30, 30, 30, 0.50)',
    gray100: '#5B5B57',
    gray80: '#8E8E8E',
    gray70: '#727270',
    gray60: '#1E1E1E',
  },
  fontSizes: {
    base: '1.125rem',
    medium:'1.5rem',
    lg: '2rem',
    xlg:'2.5rem',
    xl: '4rem', 
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);


