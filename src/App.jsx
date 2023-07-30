import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import Home from "./routes/Home/Home";
import Jewelery from "./routes/Jewelery/Jewelery";
import Woman from "./routes/Woman/Woman";
import Men from "./routes/Men/Men";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/men" element={<Men />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
