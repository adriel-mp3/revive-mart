import styled from "styled-components";
import { NavLink } from "react-router-dom";

// ver uma forma de aproveitar os estilos repetidos

export const HeaderContainer = styled.header`
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
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;

  @media (max-width:1024px) {
    flex: initial;
  }
`;

export const NavList = styled.nav`
  display: flex;
  gap: 48px;

  @media (max-width:1024px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.colors.gray50};
  font-size: ${({ theme }) => theme.fontSizes.base};
  
  &.active {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const CartButton = styled.button`

`;

export const MobileButton = styled.button`

  display: none;
  @media (max-width:1024px) {
    display:block;
  }
`

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`


