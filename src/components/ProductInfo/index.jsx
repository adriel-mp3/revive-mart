import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../api/api';
import * as S from './style';
import UserContext from '../../context/UserContext';
import ImageSkeleton from '../ImageSkeleton';
import Spinner from '../Spinner';

const ProductInfo = () => {
  const params = useParams();
  const { data: productData, error, loading } = useFetch(`${API_URL}products/${params.id}`);
  const { addProductToCart } = React.useContext(UserContext);

  return (
    <S.Container>
      {loading && <Spinner />}
      {productData &&
        <S.Product>
          <ImageSkeleton src={productData.image} alt={productData.category} />
          <div>
            <h1>{productData.title}</h1>
            <S.Subtitle>
              {productData.category}
              <span>{productData.rating['rate']}</span>
            </S.Subtitle>
            <span>Sold and delivered by: ReviveMart! | {productData.rating['count']} und in stock.</span>
            <S.Price>
              For only:
              <strong>${productData.price.toFixed(2)}</strong>
            </S.Price>
            <S.Controls>
              <S.BuyButton color='black'>Buy</S.BuyButton>
              <S.CartButton color='black' onClick={() => addProductToCart(productData)}></S.CartButton>
            </S.Controls>
            <S.ShippingPromo>Fast & Free Shipping</S.ShippingPromo>
          </div>
        </S.Product>
      }
      {!loading && <h2>Product description</h2>}
      <p>{productData && productData.description}</p>
    </S.Container>
  )
}

export default ProductInfo