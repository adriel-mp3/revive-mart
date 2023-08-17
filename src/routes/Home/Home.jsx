import React from "react";
import HeroContent from "../../components/HeroContent";
import BestSellingProducts from "../../components/BestSellingProducts";
import AboutUs from "../../components/AboutUs";
import Categories from "../../components/Categories";

const Home = () => {
  return (
    <>
      <HeroContent />
      <BestSellingProducts/>
      <AboutUs/>
      <Categories/>
    </>
  );
};

export default Home;
