import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import slider1 from "../Slider/slider1.png";
import BasinChickDrinker from "../Pages/fwdkrishnatradersproductsmain/20210408_092117.jpg";
import BasinChickDrinker2 from "../Pages/fwdkrishnatradersproductsmain/BasinChickDrinker2.5.jpg";
import gun from "../Pages/fwdkrishnatradersproductsmain/flamegun4way.jpg";
import sprinklermachine from "../Pages/fwdkrishnatradersproductsmain/SprinklerSmall.jpg";
import sunheaterwithtimer from "../Pages/fwdkrishnatradersproductsmain/sunheaterwith-timer.jpg";
import chickfeeder3kg from "../Pages/fwdkrishnatradersproducts/chickfeeder3kg.jpg";
import growerdrinker8ltr from "../Pages/fwdkrishnatradersproducts/growerdrinker8ltr.jpg";

const ModernHeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [subImageIndex, setSubImageIndex] = useState(0);

  const slides = [
    {
      title: "Revolutionizing Poultry Farming with Cutting-Edge Innovation",
      description: "Pioneering sustainable farming solutions for tomorrow",
      highlight: "Featured Solution",
      image: slider1,
      subImages: [BasinChickDrinker, BasinChickDrinker2, gun, sprinklermachine],
    },
    {
      title: "Unmatched Quality and Dedicated Care—Empowering Farmers",
      description: "Setting new standards in agricultural practices",
      highlight: "Premium Quality",
      image:
        "https://www.poultryworld.net/app/uploads/2024/06/Untitled-design-8-1-1536x1024.jpeg",
      subImages: [sunheaterwithtimer, chickfeeder3kg, growerdrinker8ltr],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  useEffect(() => {
    const subImageTimer = setInterval(() => {
      setSubImageIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(subImageTimer);
  }, []);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 750);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white-600">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness()", // Reduces brightness for better text contrast
          }}
        >
          <div className="relative h-full flex flex-col items-center justify-center px-8">
            {/* Text Section with a Semi-Transparent Background */}
            <div className=" p-8 rounded-lg text-center max-w-2xl">
            
              <h2 className="text-5xl font-bold text-white mb-6">
                {slide.title}
              </h2>
            </div>

            {/* Sub Images Section */}
            <div className="flex justify-center items-center gap-6 ">
              {slide.subImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Sub"
                  className={`w-54 h-54 rounded-lg transition-opacity duration-700 ${
                    subImageIndex === i ? "" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleNext}
        className="absolute bottom-8 right-10 p-4 bg-white text-black rounded-full shadow-lg"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default ModernHeroSlider;
