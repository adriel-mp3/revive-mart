import styled from "styled-components";
import arrow from "@/assets/arrow-button.svg";
import arrowBlack from "@/assets/arrow-black.svg";
import { theme } from "@/styles/Theme";
import { PrimaryButtonTypes } from "./index";

const buttonStyles = {
  dark: {
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    icon: arrow,
  },
  light: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    icon: arrowBlack,
  },
};

export const Button = styled.button<PrimaryButtonTypes>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: "Poppins";
  border-radius: 7px;
  padding: 0.75rem 1.5rem;
  background: ${(props) => buttonStyles[props.variant]?.backgroundColor};
  color: ${(props) => buttonStyles[props.variant]?.color};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export default Button;
