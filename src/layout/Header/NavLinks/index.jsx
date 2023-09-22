import React from 'react'
import * as S from './style';
import navItems from '../../../utils/navLinksData';

const NavLinks = ({ $isOpen }) => {
  return (
    <S.NavList $isOpenMenu={$isOpen}>
      {navItems.map((item, index) => (
        <S.NavItem key={index} to={item.to} end={item.end}>
          {item.content}
        </S.NavItem>
      ))}
      {$isOpen &&
        <S.NavItem to="cart">
          Cart
        </S.NavItem>}
    </S.NavList>
  )
}

export default NavLinks