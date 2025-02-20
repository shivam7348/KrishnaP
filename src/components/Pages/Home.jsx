import React from "react";
import SaiKrishnaIndustries from "./SaiKrishnaIndustries";
import MainComponent from "./MainComponents";
import HeroSlider from "../Slider/HeroSlider";
import ProductCard from "../Pages/ProductCard"
import Testimonials from './Testimonials';
import Popup from './../../Banner/Popup';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <SaiKrishnaIndustries />
      {/* <MainComponent /> */}
      {/* <Popup/> */}
      <ProductCard />
      {/* <Testimonials/> */}
    </div>
  );
};

export default Home;
