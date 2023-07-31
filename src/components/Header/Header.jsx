import React from "react";

import {
  CartButton,
  HeaderContainer,
  Logo,
  NavContainer,
  NavItem,
  NavList,
} from "./HeaderStyles";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";

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
        <CartButton>
          <img src={cart} alt="Cart icon" />
        </CartButton>
        {/* <button>mobile</button> */}
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
