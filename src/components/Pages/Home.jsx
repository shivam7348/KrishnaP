import React from "react";
import SaiKrishnaIndustries from "./SaiKrishnaIndustries";
import MainComponent from "./MainComponents";
import HeroSlider from "../Slider/HeroSlider";
import ProductCard from "../Pages/ProductCard"

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <SaiKrishnaIndustries />
      <MainComponent />
      <ProductCard />
    </div>
  );
};

export default Home;
