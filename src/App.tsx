import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Jewelery from "./pages/Jewelery/Jewelery";
import Woman from "./pages/Woman/Woman";
import Men from "./pages/Men/Men";
import Header from "./layout/Header";
import Footer from "./layout/Footer/index";
import styled from 'styled-components';
import ProductInfo from "./components/ProductInfo";
import Cart from "./pages/Cart";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`

const Content = styled.div`
  flex: 1;
`
function App() {
  return (
    <>
      <MainContainer>
        <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="jewelery/*" element={<Jewelery />}>
                <Route path="product-info/:id" element={<ProductInfo />} />
              </Route>
              <Route path="woman/*" element={<Woman />}>
                <Route path="product-info/:id" element={<ProductInfo />} />
              </Route>
              <Route path="men/*" element={<Men />}>
                <Route path="product-info/:id" element={<ProductInfo />} />
              </Route>
              <Route path="cart" element={<Cart />} />
            </Routes>
          </Content>
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;
