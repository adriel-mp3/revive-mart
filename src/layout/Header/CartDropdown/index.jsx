import React from 'react'
import UserContext from "../../../context/UserContext";
import { CartInfo, CartLink, CartItem, CartTitle, CartQuantity } from './style';
import QuantityProductButton from '../../../components/Button/QuantityProductButton';
import { calculateItemByQuantity } from '../../../utils/cartCalculations';

const CartDropdown = ({ $isOpen }) => {
  const { cartProducts, removeProductCart } = React.useContext(UserContext);

  return (
    <CartInfo $isOpenCart={$isOpen}>
      {cartProducts.length
        ?
        <ul>
          {cartProducts.map((product) =>
            <CartItem key={product.id}>
              <span>{product.category} <button onClick={() => removeProductCart(product)}>remove</button></span>
              <CartTitle>
                <p><strong>{product.quantity} x</strong> {product.title}</p>
                <span>$ {calculateItemByQuantity(product.quantity, product.price)}</span>
              </CartTitle>
              <CartQuantity>
                <QuantityProductButton product={product}>
                  {product.quantity}
                </QuantityProductButton>
              </CartQuantity>
            </CartItem>)}
        </ul>
        :
        <ul>
          <li>Empty Cart</li>
        </ul>}
      <CartLink to="/cart">View Cart</CartLink>
    </CartInfo>)
}

export default CartDropdown