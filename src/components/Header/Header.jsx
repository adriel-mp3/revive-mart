import React from "react";

import {
  CartButton,
  HeaderContainer,
  Logo,
  NavContainer,
  NavItem,
  NavList,
  MobileButton,
  MenuButtons
} from "./HeaderStyles";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import menuOpen from '../../assets/menu-open.svg'
const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Revive Mart" />
      <NavContainer>
        <NavList>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="jewelery">Jewelery</NavItem>
          <NavItem to="woman">Woman</NavItem>
          <NavItem to="men">Men&apos;s</NavItem>
        </NavList>
        <MenuButtons>
          <CartButton>
            <img src={cart} alt="Cart icon" />
          </CartButton>
          <MobileButton>
            <img src={menuOpen} alt="Menu open icon" />
          </MobileButton>
        </MenuButtons>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
