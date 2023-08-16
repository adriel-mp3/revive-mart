import React from 'react'
import { ButtonWrapper } from './style';
import arrow from '../../../assets/arrow-quantity.svg'
import UserContext from '../../../context/UserContext';

const QuantityControlButton = ({ children, itemId }) => {
  const { handleIncrement, handleDecrement } = React.useContext(UserContext);
  
  return (
    <ButtonWrapper>
      <button onClick={() => handleDecrement(itemId)}>
        <img src={arrow} alt="Quantity decrement button" />
      </button>
      <p>{children}</p>
      <button onClick={() => handleIncrement(itemId)}>
        <img src={arrow} alt="Quantity increment button" />
      </button>
    </ButtonWrapper>
  )
}

export default QuantityControlButton