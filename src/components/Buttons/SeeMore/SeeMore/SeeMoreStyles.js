import styled from "styled-components";
import arrow from "../../../../assets/arrow-button.svg";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: var(--font-base);
  font-family: 'Poppins';
  background: var(--color-black);
  border-radius: 7px;
  border: none;
  padding: 0.75rem 1.5rem;
  color: var(--color-white);
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    background-image: url(${arrow});
    width: 22px;
    height: 13px;
  }
`;

export default Button;
