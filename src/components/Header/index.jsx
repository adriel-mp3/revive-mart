import React from "react";

import {
  CartButton,
  HeaderContainer,
  Logo,
  NavContainer,
  MobileButton,
  NavButtons,
} from "./style";

import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import menuOpen from '../../assets/menu-open.svg'
import menuClose from '../../assets/menu-close.svg'
import useToggle from '../../hooks/useToggle';
import CartDropdown from "./CartDropdown";
import NavLinks from "./NavLinks";

const Header = () => {
  const [menuMobile, setMenuMobile] = useToggle();
  const [menuCart, setMenuCart] = useToggle();

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Revive Mart" />
      <NavContainer>
        <NavLinks $isOpen={menuMobile} />
        <NavButtons>
          <CartButton onClick={setMenuCart}>
            <img src={cart} alt="Cart icon" />
          </CartButton>
          <CartDropdown $isOpen={menuCart} />
          <MobileButton onClick={setMenuMobile}>
            <img src={menuMobile ? menuClose : menuOpen} alt="Menu open icon" />
          </MobileButton>
        </NavButtons>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
