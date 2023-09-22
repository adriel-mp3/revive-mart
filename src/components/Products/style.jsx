import styled, { keyframes } from 'styled-components';
import star from '../../assets/star-product.svg'

const showTop = keyframes`
  
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 80px;
    gap: 10px;
  }
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  gap:80px;
  justify-content: space-between;
  margin-bottom: 160px;
`

export const Product = styled.li`
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  div {
    display: flex;
    gap: 40px;
  }

  img {
    object-fit: contain;
    width: 260px;
    height:280px;
    margin: 0 auto 16px auto;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.base};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    max-width: 20ch;
    color: ${({ theme }) => theme.colors.black100};
    margin-bottom: 8px;
  }

  span {
    color: ${({ theme }) => theme.colors.gray80};
  }
`
export const Label = styled.div`
  display: flex;
  align-items: start;

  span {
    color: ${({ theme }) => theme.colors.gray80};
    font-size: ${({ theme }) => theme.fontSizes.base};
    display: flex;
    align-items: center;
    gap: 4px;
  }

  span::after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    margin-bottom: 2px;
    background: url(${star}) no-repeat;
  }
`
export const FilterButton = styled.button`
  display: flex;
  background: ${({ theme }) => theme.colors.black};
  padding: 12px 21px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Poppins', sans-serif;
  gap: 10px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;  
`

export const FilterWrapper = styled.div`
  position: relative;
`

export const FilterOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.white90};
  border-radius: 7px;
  animation: ${showTop} .3s forwards;
  top: 50px;
  
  button {
    color: ${({theme}) => theme.colors.gray60};
    text-align: left;
    padding: 10px 0;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  button + button {
    border-top: 1px solid ${({theme}) => theme.colors.gray20};
  }
`