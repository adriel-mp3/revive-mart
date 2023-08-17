import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../api/api';
import { BuyButton, CartButton, ProductContainer, Container, ProductSubtitle, ProductPrice, ButtonsContainer, ShippingPromo } from './style';
import UserContext from '../../context/UserContext';
import ImageSkeleton from '../ImageSkeleton';
import Spinner from '../Spinner';

const ProductInfo = () => {
  const params = useParams();
  const { data: productData, error, loading } = useFetch(`${API_URL}products/${params.id}`);
  const { addItemToCart } = React.useContext(UserContext);

  return (
    <Container>
      {loading && <Spinner />}
      {productData &&
        <ProductContainer>
          <ImageSkeleton src={productData.image} alt={productData.category} />
          <div>
            <h1>{productData.title}</h1>
            <ProductSubtitle>
              {productData.category}
              <span>{productData.rating['rate']}</span>
            </ProductSubtitle>
            <span>Sold and delivered by: ReviveMart! | {productData.rating['count']} und in stock.</span>
            <ProductPrice>
              For only:
              <strong>${productData.price.toFixed(2)}</strong>
            </ProductPrice>
            <ButtonsContainer>
              <BuyButton color='black'>Buy</BuyButton>
              <CartButton color='black' onClick={() => addItemToCart(productData)}></CartButton>
            </ButtonsContainer>
            <ShippingPromo>Fast & Free Shipping</ShippingPromo>
          </div>
        </ProductContainer>
      }
      {!loading && <h2>Product description</h2>}
      <p>{productData && productData.description}</p>
    </Container>
  )
}

export default ProductInfo