import React from 'react'
import { ButtonWrapper } from './style';
import arrow from '@/assets/arrow-quantity.svg'
import UserContext from '@/context/UserContext';

const QuantityProductButton = ({ children: quantity, product }) => {
  const { handleIncrement, handleDecrement } = React.useContext(UserContext);

  return (
    <ButtonWrapper>
      <button onClick={() => handleDecrement(product)}>
        <img src={arrow} alt="Quantity decrement button" />
      </button>
      <p>{quantity}</p>
      <button onClick={() => handleIncrement(product)}>
        <img src={arrow} alt="Quantity increment button" />
      </button>
    </ButtonWrapper>
  )
}

export default QuantityProductButton