import React from 'react'
import SeeMore from '../Buttons/SeeMore/SeeMore/SeeMore'
import { CardImage, CardsWrapper, ProductCard, ProductsContainer, SideInfo, SideText, SideTitle, CardTitle, CardPrice } from './BestSellingProductsStyles'
import { API_URL } from '../../api/api'
const BestSellingProducts = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const response = await fetch(`${API_URL}products?limit=4`);
    const data = await response.json();
    return setData(data)
  }

  return (
    <ProductsContainer>
      <SideInfo>
        <SideTitle>Best Selling Products</SideTitle>
        <SideText>Our collection of Best Selling products in our pre-owned store</SideText>
        <SeeMore />
      </SideInfo>
      <CardsWrapper>
        {data && data.map((product) =>
          <ProductCard key={product.title}>
            <CardImage src={product.image} alt={product.title} />
            <CardTitle>{product.title}</CardTitle>
            <CardPrice>$ {product.price}</CardPrice>
          </ProductCard>)}
      </CardsWrapper>
    </ProductsContainer>
  )
}

export default BestSellingProducts