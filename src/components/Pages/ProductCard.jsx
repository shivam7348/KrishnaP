import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import cagebabydrinker from "../Pages/fwdkrishnatradersproducts/cagebabydrinker.jpg";
import chickcrate from "../Pages/fwdkrishnatradersproducts/chickcrate.jpg";
import chickdrinker3ltr from "./fwdkrishnatradersproducts/chickdrinker3ltr.jpg";
import debeakingmachineautomatic from "./fwdkrishnatradersproducts/debeakingmachineautomatic.jpg";
import chickfeeder3kg from "./fwdkrishnatradersproducts/chickfeeder3kg.jpg";
import deberakingmachinemanual from "./fwdkrishnatradersproducts/deberakingmachinemanual.jpg";
import gasbrooder from "./fwdkrishnatradersproducts/gasbrooder.jpg";
import growerdrinker8ltr from "./fwdkrishnatradersproducts/growerdrinker8ltr.jpg";

const ProductCard = ({ product }) => (
  <motion.div
    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Link to={`/product/${product.link}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = "path/to/default/image.png";
          }}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {product.name}
          </h3>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </Link>
  </motion.div>
);




const Products = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("tab-1");

  const categories = [
    { id: "tab-1", category: "Drinking", title: " EQUIPMENTS " },
    { id: "tab-2", category: "Feeding", title: "DRINKER " },
  ];

  
const productsData = {
  "tab-1": [
    {
      name: "Parent Feeder",
      image: cagebabydrinker,
      link: "baby-chick-drinker",
    },
    {
      name: "Vaccinator",
      image: chickcrate,
      link: "chick-drinker",
    },
    {
      name: "Debeaking Machine Automatic ",
      image: debeakingmachineautomatic,
      link: "jumbo-drinker",
    },
    {
      name: "Basin Chick Feeder",
      image: chickdrinker3ltr,
      link: "deluxe-drinker",
    },
    {
      name: "Gas Broder",
      image: chickfeeder3kg,
      link: "deluxe-jumbo-drinker",
    },
    {
      name: "Chick Crate",
      image: deberakingmachinemanual,
      link: "grower-drinker",
    },
    {
      name: "Debeaking Machine Automatic",
      image: gasbrooder,
      link: "nipples-and-pressure-regulator",
    },
    {
      name: "growerdrinker8ltr",
      image: growerdrinker8ltr,
      link: "growerdrinker8ltr",
    },
  ],
  "tab-2": [
    {
      name: "Debeaking Machine Manual",
      image: "Baby%20Chick%20Drinker.png",
      link: "baby-chick-drinker",
    },
    {
      name: "Chick Drinker",
      image: "Chick%20Drinker.png",
      link: "chick-drinker",
    },
    {
      name: "Jumbo Drinker",
      image: "jumbo-drinker.png",
      link: "jumbo-drinker",
    },
    {
      name: "Deluxe Drinker",
      image: "Deluxe%20Drinker.png",
      link: "deluxe-drinker",
    },
    {
      name: "Deluxe Jumbo Drinker",
      image: "Deluxe%20Jumbo%20Drinker.png",
      link: "deluxe-jumbo-drinker",
    },
    {
      name: "Grower Drinker",
      image: "grower-drinker.png",
      link: "grower-drinker",
    },
    {
      name: "Nipples & Pressure Regulator",
      image: "Nipples-%26-Pressure-Regulator.png",
      link: "nipples-and-pressure-regulator",
    },
  ],
  // ... Similar structure for other tabs
};
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12 my-22">
        <h2 className="text-base text-red-800 font-semibold tracking-wide uppercase">
          Explore Our Range
        </h2>
        <h1 className="mt-2 text-4xl font-bold text-red-600 sm:text-5xl">
          Our Products
        </h1>
        <p className="mt-4 text-lg text-black-600">
          High-quality equipment designed to meet all your poultry farming
          needs.
        </p>
      </div>

      <div className="mb-8">
        <nav className="flex flex-wrap justify-center space-x-4">
          {categories.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeTab === tab.id
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {tab.title}
            </motion.button>
          ))}
        </nav>
      </div>

      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap -mx-4"
          >
            {productsData[activeTab]?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;


