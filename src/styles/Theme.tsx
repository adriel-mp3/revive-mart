import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const theme = {
  colors: {
    base: "#F8F8E6",
    black: "#000000",
    black100: "#1F1F1E",
    black90: "#1B1B1B",
    white: "#ffffff",
    white90: "#f1f1f1",
    gray100: "#5B5B57",
    gray80: "#8E8E8E",
    gray70: "#727270",
    gray60: "#1E1E1E",
    gray50: "rgba(30, 30, 30, 0.50)",
    gray40: "#A6A6A6",
    gray30: "#D9D9D9",
    gray20: "#E9E9E9",
    gray10: "#C1C1C1",
  },
  fontSizes: {
    extraSmall: ".75rem",
    small: "1rem",
    base: "1.125rem",
    medium: "1.5rem",
    lg: "2rem",
    xlg: "2.5rem",
    xl: "4rem",
  },
  fontWeights: {
    medium: 500,
    semiBold: 600,
    extraBold: 800,
  },
};

export const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
