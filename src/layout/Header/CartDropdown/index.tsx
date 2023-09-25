import React from 'react'
import UserContext from "@/context/UserContext";
import * as S from './style';
import QuantityProductButton from '@/components/Button/QuantityProductButton';
import { calculateItemByQuantity } from '@/utils/cartCalculations';

const CartDropdown = ({ $isOpen }) => {
  const { cartProducts, removeProductCart } = React.useContext(UserContext);

  return (
    <S.CartList $isOpenCart={$isOpen}>
      <ul>
        {cartProducts.length === 0 && <li style={{ textAlign: 'center', padding: '20px' }}>Empty Cart</li>}
        {cartProducts.map((product) =>
          <S.Item key={product.id}>
            <span>{product.category} <button onClick={() => removeProductCart(product)}>remove</button></span>
            <S.Label>
              <p><strong>{product.quantity} x</strong> {product.title}</p>
              <span>$ {calculateItemByQuantity(product.quantity, product.price)}</span>
            </S.Label>
            <S.Options>
              <QuantityProductButton product={product}>
                {product.quantity}
              </QuantityProductButton>
            </S.Options>
          </S.Item>)}
      </ul>
      <S.ViewCart to="/cart">View Cart</S.ViewCart>
    </S.CartList>)
}

export default CartDropdown