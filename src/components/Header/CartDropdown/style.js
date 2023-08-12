import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom';

const showLeft = keyframes`
  
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const CartInfo = styled.div`
  display: ${({ $isOpenCart }) => $isOpenCart ? 'block' : 'none'};
  animation: ${showLeft} .3s forwards;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  padding: 20px;
  width: 300px;
  background: ${({ theme }) => theme.colors.white90};
  border-radius:7px;
  left: -280px;
  top: 40px;
`;


export const CartLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  align-items: center;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 2px;
    background: ${({ theme }) => theme.colors.black90};
  }
`;
