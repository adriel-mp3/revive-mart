import React from 'react'
import Products from '../../components/Products'
import ProductInfo from '../../components/ProductInfo'
import { Route, Routes } from 'react-router-dom'

const Woman = () => {
  return (
    <Routes>
      <Route path="/*" element={<Products categorie={"women's clothing"} />} />
      <Route path="product-info/:id" element={<ProductInfo />} />
    </Routes>

  )
}

export default Woman