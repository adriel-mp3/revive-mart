import React from 'react'
import { CartContainer, ProductLabel, ProductQuantity, ProductContainer, ProductPrice, CartInfo, MainTitle, LabelWrapper, LabelText, LabelTitle, ProductTotal } from './style';
import arrow from '../../assets/arrow-quantity.svg';
import UserContext from '../../context/UserContext';

const Cart = () => {
  const { cartData } = React.useContext(UserContext);
  
  return (
    <CartContainer>
      <CartInfo>
        <MainTitle>
          <h1>Cart <span>{cartData.length} items</span></h1>
        </MainTitle>
        {cartData && cartData.map((item, index) =>
          <ProductContainer key={item.id}>
            <ProductLabel>
              {index === 0 && <LabelTitle>product</LabelTitle>}
              <LabelWrapper>
                <img src={item.imgUrl} alt={item.title} />
                <LabelText>
                  <span>{item.category}</span>
                  <p>{item.title}</p>
                </LabelText>
              </LabelWrapper>
            </ProductLabel>
            <ProductQuantity>
            {index === 0 &&<LabelTitle>quantity</LabelTitle>}
              <div>
                <button>
                  <img src={arrow} alt="Quantity decrement button" />
                </button>
                <p>{item.quantity}</p>
                <button>
                  <img src={arrow} alt="Quantity increment button" />
                </button>
              </div>
            </ProductQuantity>
            <ProductPrice>
              {index === 0 && <LabelTitle>price</LabelTitle>}
              <div>
                <p>$ {item.price}</p>
              </div>
            </ProductPrice>
            <ProductTotal>
              {index === 0 && <LabelTitle>total</LabelTitle>}
              <div>
                <p>$ {item.price * item.quantity}</p>
              </div>
            </ProductTotal>
          </ProductContainer>)}
      </CartInfo>
      <div>
        <h2>outro conteudo</h2>
      </div>
    </CartContainer>
  )
}

export default Cart