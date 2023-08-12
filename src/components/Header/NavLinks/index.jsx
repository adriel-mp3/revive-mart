import React from 'react'
import { NavList, NavItem } from './style';
import navItems from '../../../utils/navLinksData';

const NavLinks = ({ $isOpen }) => {
  return (
    <NavList $isOpenMenu={$isOpen}>
     {navItems.map((item, index) => (
        <NavItem key={index} to={item.to} end={item.end}>
          {item.content}
        </NavItem>
      ))}
      {$isOpen &&
        <NavItem to="cart">
          Cart
        </NavItem>}
    </NavList>
  )
}

export default NavLinks