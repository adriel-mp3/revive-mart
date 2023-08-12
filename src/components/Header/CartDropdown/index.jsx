import React from 'react'
import UserContext from "../../../context/UserContext";
import { CartInfo, CartLink } from './style';

const CartDropdown = ({ $isOpen }) => {
  const { cartData } = React.useContext(UserContext);
  if (cartData) console.log('vazio')

  if (cartData.length)
    return (
      <CartInfo $isOpenCart={$isOpen}>
        <ul>
          {cartData.map((itemCart) => <li key={itemCart.id}>
            <span>{itemCart.category} <button>remove</button></span>
            <p>{itemCart.title} <span>{itemCart.price}</span></p>
          </li>)}
        </ul>
        <CartLink to="/cart">View Cart</CartLink>
      </CartInfo>
    )
  return (<CartInfo $isOpenCart={$isOpen}>
    <ul>
      <li>Empty Cart</li>
    </ul>
    <CartLink to="/cart">View Cart</CartLink>
  </CartInfo>)
}

export default CartDropdown