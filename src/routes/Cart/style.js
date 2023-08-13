import styled from 'styled-components';

export const CartContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1600px;
  margin: 0 auto 180px auto;
  padding: 0 20px;
`

export const CartInfo = styled.div`

`

export const MainTitle = styled.div`
  margin-bottom: 80px;
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 400;
    color:${({ theme }) => theme.colors.gray40};
  }
`
export const ProductContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 20px;
  
  & + & {
    border-top:1px solid ${({theme}) => theme.colors.gray30};
    padding-top: 20px;
  }
`

export const ProductLabel = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;

  p {
    max-width: 20ch;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
  }
`

export const LabelTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color:${({ theme }) => theme.colors.gray40};
  margin-bottom: 20px;
`

export const LabelWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  img {
    width: 120px;
    max-height: 120px;
    object-fit: contain;
    margin-right: 20px;
  }   
`

export const LabelText = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color:${({ theme }) => theme.colors.gray70};
  }

  p {
    font-weight:${({theme}) => theme.fontWeights.semiBold};
  }
`

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 1 70px;

  p {
    font-weight:${({theme}) => theme.fontWeights.semiBold};
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  & button:last-child {
    rotate: 180deg;
  }
`
export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0 1 100px;
  p {
    font-weight:${({theme}) => theme.fontWeights.semiBold};
  }
  div {
    display: flex;
    flex: 1;
    align-items: center;
  }
`

export const ProductTotal = styled(ProductPrice)`
  align-items: flex-end
`
