import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <Link to={`/product/${product.link}`} className="block">
      <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          src={`img/${product.image}`} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        </div>
      </div>
    </Link>
  </div>
);

const   Products = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('tab-1');

  const categories = [
    { id: 'tab-1', category: 'Drinking', title: 'Drinking Equipments' },
    { id: 'tab-2', category: 'Feeding', title: 'Feeding Equipments' },
    { id: 'tab-3', category: 'Climate', title: 'Climate Control' },
    { id: 'tab-4', category: 'Transport', title: 'Transport Equipments' },
    { id: 'tab-5', category: 'Brooding', title: 'Brooding Equipments' },
    { id: 'tab-6', category: 'Disinfecting', title: 'Disinfecting Equipments' },
    { id: 'tab-7', category: 'Other', title: 'Other Equipments' },
  ];

  const productsData = {
    'tab-1': [
      { name: 'Baby Chick Drinker', image: 'Baby%20Chick%20Drinker.png', link: 'baby-chick-drinker' },
      { name: 'Chick Drinker', image: 'Chick%20Drinker.png', link: 'chick-drinker' },
      { name: 'Jumbo Drinker', image: 'jumbo-drinker.png', link: 'jumbo-drinker' },
      { name: 'Deluxe Drinker', image: 'Deluxe%20Drinker.png', link: 'deluxe-drinker' },
      { name: 'Deluxe Jumbo Drinker', image: 'Deluxe%20Jumbo%20Drinker.png', link: 'deluxe-jumbo-drinker' },
      { name: 'Grower Drinker', image: 'grower-drinker.png', link: 'grower-drinker' },
      { name: 'Nipples & Pressure Regulator', image: 'Nipples-%26-Pressure-Regulator.png', link: 'nipples-and-pressure-regulator' },
    ],
    // ... Similar structure for other tabs
    'tab-2': [
       { name: 'Baby Chick Drinker', image: 'Baby%20Chick%20Drinker.png', link: 'baby-chick-drinker' },
      { name: 'Chick Drinker', image: 'Chick%20Drinker.png', link: 'chick-drinker' },
      { name: 'Jumbo Drinker', image: 'jumbo-drinker.png', link: 'jumbo-drinker' },
      { name: 'Deluxe Drinker', image: 'Deluxe%20Drinker.png', link: 'deluxe-drinker' },
      { name: 'Deluxe Jumbo Drinker', image: 'Deluxe%20Jumbo%20Drinker.png', link: 'deluxe-jumbo-drinker' },
      { name: 'Grower Drinker', image: 'grower-drinker.png', link: 'grower-drinker' },
      { name: 'Nipples & Pressure Regulator', image: 'Nipples-%26-Pressure-Regulator.png', link: 'nipples-and-pressure-regulator' },
     
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Products</h2>
        <h1 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Products
        </h1>
      </div>

      <div className="mb-8">
        <nav className="flex flex-wrap justify-center space-x-4 border-b border-gray-200">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="text-xs block">{tab.category}</span>
              <span className="mt-1">{tab.title}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap -mx-4">
          {productsData[activeTab]?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;