import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Jewelery from "./routes/Jewelery/Jewelery";
import Woman from "./routes/Woman/Woman";
import Men from "./routes/Men/Men";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styled from 'styled-components';
import ProductInfo from "./components/ProductInfo/ProductInfo";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
            <Route path="woman" element={<Woman />} />
            <Route path="men" element={<Men />} />
          </Routes>
        </Content>
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;
