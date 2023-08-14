import React from 'react'
import { CartContainer, ProductLabel, ProductQuantity, ProductContainer, ProductPrice, CartInfo, MainTitle, LabelWrapper, LabelText, LabelTitle, ProductTotal, CartSummary, OrderList, ButtonWrapper } from './style';
import arrow from '../../assets/arrow-quantity.svg';
import UserContext from '../../context/UserContext';
import cart from '../../assets/cart-white.svg';

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
              {index === 0 && <LabelTitle>quantity</LabelTitle>}
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
                <p>$ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </ProductTotal>
          </ProductContainer>)}
      </CartInfo>
      <CartSummary>
        <h2>Order summary</h2>
        <OrderList>
          <li>Products <span>$500</span></li>
          <li>Shipping <span>FREE</span></li>
        </OrderList>
        <form>
          <label htmlFor="promo">Promo code</label>
          <input type="text" name="" id="promo" placeholder='Enter your code' />
        </form>
        <p>Total: <span>$500</span></p>
        <ButtonWrapper>
          <button>Proceed to Payment <img src={cart} alt="Cart icon" /></button>
        </ButtonWrapper>
      </CartSummary>
    </CartContainer>
  )
}

export default Cart