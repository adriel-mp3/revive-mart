import React from "react";
import HeroContent from "../../components/HeroContent/HeroContent";
import BestSellingProducts from "../../components/BestSellingProducts/BestSellingProducts";
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <main style={{ maxWidth: "1600px", margin: "0 auto", padding:'0 20px' }}>
      <HeroContent />
      <BestSellingProducts/>
    </main>
  );
};

export default Home;
