import React from 'react'
import { CardsWrapper, ProductCard, ProductsContainer, SideInfo} from './BestSellingProductsStyles'
import { API_URL } from '../../api/api'
import PrimaryButton from '../Buttons/PrimaryButton'

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
        <h2>Best Selling Products</h2>
        <p>Our collection of Best Selling products in our pre-owned store</p>
        <PrimaryButton color='black'>See more</PrimaryButton>
      </SideInfo>
      <CardsWrapper>
        {data && data.map((product) =>
          <ProductCard key={product.title}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <span>$ {product.price}</span>
          </ProductCard>)}
      </CardsWrapper>
    </ProductsContainer>
  )
}

export default BestSellingProducts