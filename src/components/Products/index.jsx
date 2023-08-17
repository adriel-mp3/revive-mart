import React from 'react'
import { API_URL } from '../../api/api';
import { Link } from 'react-router-dom';
import { MainContainer, ProductCard, ProductsContainer, ProductLabel, FilterButton, FilterOptions, FilterWrapper } from './style';
import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import filter from '../../assets/filter.svg';
import ImageSkeleton from '../ImageSkeleton';
import Spinner from '../Spinner';

const Products = ({ categorie }) => {
  const { data: products, error, loading } = useFetch(`${API_URL}products/category/${categorie}`);
  const [filterDropdown, setFilterDropdown] = useToggle();
  const [sortedProducts, setSortedProducts] = React.useState([]);
  const [sortType, setSortType] = React.useState('name');

  React.useEffect(() => {
    if (products) {
      let sortedProductsCopy = [...products];
  
      const sortFunctions = {
        rating: (a, b) => b.rating['rate'] - a.rating['rate'],
        highestPrice: (a, b) => b.price - a.price,
        lowestPrice: (a, b) => a.price - b.price,
        name: (a, b) => a.title.localeCompare(b.title),
      };
  
      const sortFunction = sortFunctions[sortType] || sortFunctions.name;
  
      sortedProductsCopy.sort(sortFunction);
  
      setSortedProducts(sortedProductsCopy);
    }
  }, [products, sortType])
  
  return (
    <MainContainer>
      <div>
        <h1>{categorie}</h1>
        <FilterWrapper>
          <FilterButton onClick={setFilterDropdown}>Filter <img src={filter} alt="Filter icon" /></FilterButton>
          {filterDropdown &&
            <FilterOptions>
              <button onClick={() => setSortType('rating')}>Rating</button>
              <button onClick={() => setSortType('highestPrice')}>Highest Price</button>
              <button onClick={() => setSortType('lowestPrice')}>Lowest Price</button>
              <button onClick={() => setSortType('name')}>A - Z</button>
            </FilterOptions>}
        </FilterWrapper>
      </div>
      <ProductsContainer>
      {loading && <Spinner/>}
        {sortedProducts && sortedProducts.map((product) =>
          <ProductCard key={product.id}>
            <Link to={`product-info/${product.id}`}>
              <ImageSkeleton src={product.image} alt={product.title} />
              <ProductLabel>
                <h2>{product.title}</h2>
                <span>{product.rating['rate'].toFixed(2)}</span>
              </ProductLabel>
              <span>$ {product.price.toFixed(2)}</span>
            </Link>
          </ProductCard>
        )}
      </ProductsContainer>
    </MainContainer>
  )
}

export default Products