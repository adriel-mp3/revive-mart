import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom';
import trash from '../../../assets/trash-cart.svg';

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

export const CartList = styled.div`
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
  max-height: 400px;
  overflow-y: scroll;
  z-index: 1000;
`;


export const ViewCart = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  margin-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray20};
  padding-top: 10px;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 2px;
    background: ${({ theme }) => theme.colors.black90};
  }
`;

export const Item = styled.li`
  padding-bottom: 10px;

  & + & {
    padding-top:10px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray20};
  }
  & > span { 
    color:${({ theme }) => theme.colors.gray40};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.extraSmall};
    
    button {
      display: flex;
      align-items: center;
      gap: 4px;
      color:${({ theme }) => theme.colors.gray40};
      padding: 4px;
      cursor: pointer;
    }

    button::after {
      content: '';
      display: block;
      background: url(${trash});
      width: 9px;
      height: 11px;
    }
  }
`

export const Label = styled.div`
  display: flex;
  justify-content:space-between;
  margin-right: 4px;

  p {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    max-width: 15ch;
    line-height: 1.2rem;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }

  span {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
`

export const Options = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    cursor: pointer;
  }
  
  & button:last-child {
    rotate: 180deg;
  }
`