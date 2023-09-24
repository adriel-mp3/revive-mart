import React from 'react'
import Products from '../../components/Products'
import ProductInfo from '../../components/ProductInfo'
import { Route, Routes } from 'react-router-dom'

const Men = () => {
  return (
    <Routes>
      <Route path="/*" element={<Products categorie={"men's clothing"} />} />
      <Route path="product-info/:id" element={<ProductInfo />} />
    </Routes>
  )
}

export default Men
