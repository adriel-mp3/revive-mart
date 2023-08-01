import styled from 'styled-components';
import arrow from '../../assets/custom-arrow.svg'
export const ProductsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap:40px;
  margin-bottom: 8rem;
`

export const SideInfo = styled.div`
  position: relative;
  &::after {
    display: block;
    position: absolute;
    top: -40px;
    left: -70px;
    content: '';
    background-image: url(${arrow});
    width: 73px;
    height: 24px;
  }
`

export const SideTitle = styled.h2`
  font-weight: 700;
  font-size: var(--lg);
  color: var(--color-black-100);
  max-width: 10ch;
  margin-bottom: .75rem;
`

export const SideText = styled.div`
  max-width: 20ch;
  font-weight: 500;
  color: var(--color-gray-70);
  font-size: var(--base);
  margin-bottom: 1.5rem;
`

export const CardsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap:80px;
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const CardImage = styled.img`
  max-height: 300px;
  max-width: 350px;
  object-fit: contain;
  margin-bottom: .75rem;
`
export const CardTitle = styled.h3`
  font-weight: 400;
  max-width: 20ch;
  font-size: var(--base);
  color:var(--color-black-100);
  display: -webkit-box; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
  margin-bottom: .5rem;
`

export const CardPrice = styled.span`
  font-size:var(--base);
  color:var(--color-gray-60);
  flex: 1;
`
