import React from 'react'
import Products from '../../components/Products'
import { Routes, Route } from 'react-router-dom'
import ProductInfo from '../../components/ProductInfo'

const Jewelery = () => {
  return (
    <Routes>
      <Route path="/*" element={<Products categorie={'jewelery'} />} />
      <Route path="product-info/:id" element={<ProductInfo />} />
    </Routes>
  )
}

export default Jewelery