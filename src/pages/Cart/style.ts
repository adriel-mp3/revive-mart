import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto 180px auto;
  padding: 0 20px;
  gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

export const Cart = styled.div``;

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
    color: ${({ theme }) => theme.colors.gray40};
  }
`;
export const ProductList = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 20px;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.gray30};
    padding-top: 20px;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    max-width: 20ch;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
  }
`;

export const LabelTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.gray40};
  margin-bottom: 20px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  img {
    width: 120px;
    max-height: 120px;
    object-fit: contain;
    margin-right: 20px;
  }
`;

export const LabelText = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.gray70};
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
`;

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 1 70px;

  p {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
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
`;
export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0 1 100px;
  p {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
  div {
    display: flex;
    flex: 1;
    align-items: center;
  }
`;

export const ProductTotal = styled(ProductPrice)`
  align-items: flex-end;
`;

export const CartSummary = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray30};
    padding-bottom: 5px;
    margin-bottom: 20px;
  }

  p {
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }

  form {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray30};

    label {
      display: block;
      font-size: ${({ theme }) => theme.fontSizes.medium};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      color: ${({ theme }) => theme.colors.gray80};
      margin-bottom: 10px;
    }

    input {
      border: none;
      border-radius: 7px;
      background: ${({ theme }) => theme.colors.gray20};
      font-family: "Poppins", sans-serif;
      padding: 12px 19px;
    }

    input::placeholder {
      color: ${({ theme }) => theme.colors.gray10};
    }
  }
`;

export const OrderList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.gray80};
  }

  li + li {
    margin-top: 20px;
  }

  li:last-child {
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray30};
    margin-bottom: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  button {
    display: flex;
    gap: 14px;
    padding: 0.75rem 1.5rem;
    font-family: "Poppins", sans-serif;
    border-radius: 7px;
    align-items: center;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme: theme }) => theme.fontSizes.base};
    cursor: pointer;
  }
`;
