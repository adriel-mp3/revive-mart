import React from "react";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import menuOpen from '../../assets/menu-open.svg'
import menuClose from '../../assets/menu-close.svg'
import useToggle from '../../hooks/useToggle';
import CartDropdown from "./CartDropdown";
import NavLinks from "./NavLinks";
import UserContext from "../../context/UserContext";
import { calculateItemsQuantity } from "../../utils/cartCalculations";

const Header = () => {
  const [menuMobile, setMenuMobile] = useToggle();
  const [menuCart, setMenuCart] = useToggle();
  const { cartProducts } = React.useContext(UserContext);
  const itemsInCart = calculateItemsQuantity(cartProducts);

  return (
    <S.Container>
      <S.Logo src={logo} alt="Revive Mart" />
      <S.Nav>
        <NavLinks $isOpen={menuMobile} />
        <S.ButtonsWrapper>
          <S.CartButton onClick={setMenuCart} >
            <img src={cart} alt="Cart icon" />
            <span>{itemsInCart}</span>
          </S.CartButton>
          <CartDropdown $isOpen={menuCart} />
          <S.MobileButton onClick={setMenuMobile}>
            <img src={menuMobile ? menuClose : menuOpen} alt="Menu open icon" />
          </S.MobileButton>
        </S.ButtonsWrapper>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
