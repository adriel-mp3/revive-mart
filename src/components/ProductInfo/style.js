import styled from 'styled-components';
import Button from '../Button/PrimaryButton/style';
import cart from '../../assets/cart-white.svg'
import star from '../../assets/star-product.svg'
import box from '../../assets/box.svg'
export const Container = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 80px;
  
  h2 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.xlg};
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid #ccc;
  }

  & > p {
    max-width:70ch;
    color:${({ theme }) => theme.colors.gray100};
  }
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 80px;
  align-items: center;

  img {
    object-fit: cover;
    max-width: 600px;
    max-height:600px;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xlg};
    font-weight: 800;
    margin-bottom: 10px;
    line-height: 3rem;
  }

  @media (max-width:1024px) {
    grid-template-columns: 1fr;

    img {
      max-width: 400px;
    }
  }
`

export const ProductSubtitle = styled.p`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-weight: 500;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
    color:${({ theme }) => theme.colors.gray100};
  }
  span::after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    margin-bottom: 2px;
    background: url(${star});
  }
`

export const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-top: 20px;
  gap: 20px;
  strong {
    font-size: ${({ theme }) => theme.fontSizes.xlg};
    font-weight: 800;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`

export const BuyButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &::after {
    display: none;
  }
`

export const CartButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &::after {
    background: url(${cart}) no-repeat center center;
    width: 23px;
    height: 23px;
}
`

export const ShippingPromo = styled.p`
  background: ${({ theme }) => theme.colors.base};
  color:${({ theme }) => theme.colors.black100};
  text-align: center;
  padding: 15px 0;
  border-radius: 7px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  &::before {
    content: '';
    display: block;
    background: url(${box});
    width: 40px;
    height: 40px;
  }
`