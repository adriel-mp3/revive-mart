import React from 'react'
import UserContext from "../../../context/UserContext";
import { CartInfo, CartLink, CartItem, CartTitle, CartQuantity } from './style';
import QuantityControlButton from '../../Button/QuantityControlButton';
import { calculateItemByQuantity } from '../../../utils/calculationsCart';

const CartDropdown = ({ $isOpen }) => {
  const { cartData } = React.useContext(UserContext);

  if (cartData.length)
    return (
      <CartInfo $isOpenCart={$isOpen}>
        <ul>
          {cartData.map((itemCart) =>
            <CartItem key={itemCart.id}>
              <span>{itemCart.category} <button>remove</button></span>
              <CartTitle>
                <p><strong>{itemCart.quantity} x</strong> {itemCart.title}</p>
                <span>$ {calculateItemByQuantity(itemCart.quantity, itemCart.price)}</span>
              </CartTitle>
              <CartQuantity>
                <QuantityControlButton itemId={itemCart.id}>
                  {itemCart.quantity}
                </QuantityControlButton>
              </CartQuantity>
            </CartItem>)}
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