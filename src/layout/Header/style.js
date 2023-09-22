import styled, { keyframes } from 'styled-components'

export const showLeft = keyframes`
  
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width:1024px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  margin-right: 80px;

  @media (max-width:768px) {
    margin-right: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;
  position: relative;

  @media (max-width:1024px) {
    flex: initial;
  }
`;

export const CartButton = styled.button`
    position: relative;
    
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -5px;
      left: 15px;
      content: '1';
      width: 18px;
      height: 18px;
      background: #DC2626;
      border-radius: 50%;
      font-family: 'Poppins';
      color: ${({theme}) => theme.colors.white};
      font-size: ${({theme}) => theme.fontSizes.extraSmall};
  }
`;

export const MobileButton = styled.button`
  display: none;
  @media (max-width:1024px) {
    display:block;
    z-index: 110;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 30px;
`


