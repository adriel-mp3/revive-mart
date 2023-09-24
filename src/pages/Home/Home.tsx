import React from "react";
import Hero from "../../components/Hero";
import BestSellingProducts from "../../components/BestSellingProducts";
import AboutUs from "../../components/AboutUs";
import Categories from "../../components/Categories";

const Home = () => {
  return (
    <>
      <Hero />
      <BestSellingProducts />
      <AboutUs />
      <Categories />
    </>
  );
};

export default Home;
