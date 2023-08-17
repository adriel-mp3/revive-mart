import React from 'react';
import { CardsWrapper, ProductCard, ProductsContainer, SideInfo } from './style';
import { API_URL } from '../../api/api';
import PrimaryButton from '../Button/PrimaryButton';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import ImageSkeleton from '../ImageSkeleton';
import Spinner from '../Spinner';

const BestSellingProducts = () => {
  const { data, loading, error } = useFetch(`${API_URL}products?limit=4`);

  return (
    <ProductsContainer>
      <SideInfo>
        <h2>Best Selling Products</h2>
        <p>Our collection of Best Selling products in our pre-owned store</p>
        <PrimaryButton color='black'>See more</PrimaryButton>
      </SideInfo>
      {loading && <Spinner />}
      <CardsWrapper>
        {data && data.map((product) =>
          <Link to='men' key={product.id}>
            <ProductCard>
              <ImageSkeleton src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <span>$ {(product.price).toFixed(2)}</span>
            </ProductCard>
          </Link>)}
      </CardsWrapper>
    </ProductsContainer>
  )
}

export default BestSellingProducts