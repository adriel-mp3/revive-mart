import styled from "styled-components";
import { NavLink } from "react-router-dom";

// ver uma forma de aproveitar os estilos repetidos

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  max-width: 1600px;
  margin: 60px auto;
  padding: 0 20px;
`;

export const Logo = styled.img`
  margin-right: 80px;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 48px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  color: var(--gray);
  font-size: var(--base);
  
  &.active {
    color: var(--black);
  }
`;

export const CartButton = styled.button`
  border: none;
  background: none;
`;
