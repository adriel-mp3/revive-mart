import styled from "styled-components";
import arrow from "./../../assets/arrow-button.svg";
import arrowBlack from "./../../assets/arrow-black.svg";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: 'Poppins';
  background:${(props) => props.color};
  border-radius: 7px;
  border: none;
  padding: 0.75rem 1.5rem;
  color: ${(props) => props.color === 'black' ? 'white' : 'black'};
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    background-image: ${(props) => props.color === 'black' ? `url(${arrow})` : `url(${arrowBlack})`};
    background-repeat:no-repeat;
    width: 22px;
    height: 13px;
  }
`;

export default Button;
