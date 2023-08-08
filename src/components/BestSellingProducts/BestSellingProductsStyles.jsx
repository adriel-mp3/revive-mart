import styled from 'styled-components';
import arrow from '../../assets/custom-arrow.svg'

export const ProductsContainer = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  gap:40px;
  margin-bottom: 8rem;

  @media (max-width:1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const SideInfo = styled.div`
  position: relative;
  
  &::after {
    display: block;
    position: absolute;
    rotate: 100deg;
    top: -40px;
    right: -50px;
    content: '';
    background-image: url(${arrow});
    width: 73px;
    height: 24px;
  }

  h2 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.black100};
    max-width: 10ch;
    margin-bottom: .75rem;
  }

  p {
    max-width: 20ch;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray70};
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-bottom: 1.5rem;
  }

  @media (max-width:1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    p, h2 {
      margin-bottom: 0rem;
    }
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap:80px;

  @media (max-width:1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:40px;
  }
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  img {
    max-height: 300px;
    max-width: 350px;
    object-fit: contain;
    margin-bottom: .75rem;
  }

  h3 {
    font-weight: 400;
    max-width: 20ch;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color:${({ theme }) => theme.colors.black100};
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    margin-bottom: .5rem;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.gray60};
    flex: 1;
  }
`
