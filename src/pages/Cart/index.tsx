import React from "react";
import * as S from "./style";
import UserContext from "@/context/UserContext";
import cart from "@/assets/cart-white.svg";
import QuantityProductButton from "@/components/Button/QuantityProductButton";
import {
  calculateItemByQuantity,
  calculateItemsQuantity,
  calculateTotalPrice,
} from "@/utils/cartCalculations";
import PrimaryButton from "@/components/Button/PrimaryButton/";

const Cart = () => {
  const { cartProducts } = React.useContext(UserContext);
  const totalCartValue = calculateTotalPrice(cartProducts);
  const totalCartItems = calculateItemsQuantity(cartProducts);

  return (
    <S.Container>
      <S.Cart>
        <S.MainTitle>
          <h1>
            Cart <span>{totalCartItems} items</span>
          </h1>
        </S.MainTitle>
        {cartProducts &&
          cartProducts.map((item, index) => (
            <S.ProductList key={item.id}>
              <S.Label>
                {index === 0 && <S.LabelTitle>product</S.LabelTitle>}
                <S.LabelWrapper>
                  <img src={item.imgUrl} alt={item.title} />
                  <S.LabelText>
                    <span>{item.category}</span>
                    <p>{item.title}</p>
                  </S.LabelText>
                </S.LabelWrapper>
              </S.Label>
              <S.ProductQuantity>
                {index === 0 && <S.LabelTitle>quantity</S.LabelTitle>}
                <QuantityProductButton product={item}>
                  {item.quantity}
                </QuantityProductButton>
              </S.ProductQuantity>
              <S.ProductPrice>
                {index === 0 && <S.LabelTitle>price</S.LabelTitle>}
                <div>
                  <p>$ {item.price}</p>
                </div>
              </S.ProductPrice>
              <S.ProductTotal>
                {index === 0 && <S.LabelTitle>total</S.LabelTitle>}
                <div>
                  <p>$ {calculateItemByQuantity(item.quantity, item.price)}</p>
                </div>
              </S.ProductTotal>
            </S.ProductList>
          ))}
      </S.Cart>
      <S.CartSummary>
        <h2>Order summary</h2>
        <S.OrderList>
          <li>
            Products <span>$ {totalCartValue}</span>
          </li>
          <li>
            Shipping <span>FREE</span>
          </li>
        </S.OrderList>
        <form>
          <label htmlFor="promo">Promo code</label>
          <input type="text" name="" id="promo" placeholder="Enter your code" />
        </form>
        <p>
          Total: <span>$ {totalCartValue}</span>
        </p>
        <S.ButtonWrapper>
          <PrimaryButton
            label="Proceed to Payment"
            icon={cart}
            variant="dark"
          />
        </S.ButtonWrapper>
      </S.CartSummary>
    </S.Container>
  );
};

export default Cart;
