import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Circle, CircleDot } from "lucide-react";
import BasinChickDrinker from "../Pages/fwdkrishnatradersproductsmain/BasinChickDrinker2.5.jpg";
import flamegun from "../Pages/fwdkrishnatradersproductsmain/flamegun4way.jpg";
import jumboautomaticdrinkerclassic from "../Pages/fwdkrishnatradersproductsmain/jumboautomaticdrinkerclassic.jpg";
import SprinklerSmall from "../Pages/fwdkrishnatradersproductsmain/SprinklerSmall.jpg";
import slider1 from "../Slider/sloider1.png";
import slider2 from "../Slider/slider2.png";
import slider4 from "../Slider/slider4.png";

const WelcomeSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      backgroundImage: slider1,
      images: [
        BasinChickDrinker,
        flamegun,
        jumboautomaticdrinkerclassic,
        SprinklerSmall,
      ],
      title: "WELCOME TO KRISHNA POULTRY EQUIP",
      description:
        "We provide the highest quality poultry products with modern farming techniques",
      highlight: "Featured",
    },
    {
      backgroundImage: slider2,
      images: [
        BasinChickDrinker,
        flamegun,
        jumboautomaticdrinkerclassic,
        SprinklerSmall,
      ],
      title: "Modern Farm Equipment",
      description: "Using state-of-the-art equipment for the best results",
      highlight: "New",
    },
    {
      backgroundImage: slider4,
      images: [
        BasinChickDrinker,
        flamegun,
        jumboautomaticdrinkerclassic,
        SprinklerSmall,
      ],
      title: "Sustainable Practices",
      description:
        "Committed to environmental sustainability and animal welfare",
      highlight: "Eco-Friendly",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full rounded-xl shadow-xl overflow-hidden">
      <div className="relative min-h-[900px] sm:min-h-[600px] md:min-h-[800px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
              activeSlide === index
                ? "opacity-100 translate-x-0"
                : activeSlide > index
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "background-image 0.7s ease-in-out",
            }}
          >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center sm:justify-start">
              {/* Title Section */}
              <div className="text-center text-white pt-8 sm:pt-16 px-4 mb-4 sm:mb-8">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-4 inline-block">
                  {slide.highlight}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-xl max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <button className="mt-4 sm:mt-6 bg-red-600 hover:bg-indigo-700 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                  Learn More
                </button>
              </div>

              {/* Images Grid - Responsive Layout */}
              <div className="px-4 sm:px-6 mt-4 sm:mt-auto mb-8 sm:mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 max-w-6xl mx-auto">
                  {slide.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative h-40 sm:h-64 overflow-hidden rounded-lg"
                    >
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                      <div className="absolute inset-2 bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden flex items-center justify-center p-2">
                        <img
                          src={image}
                          alt={`Product ${imgIndex + 1}`}
                          className="max-w-full max-h-full object-contain transform transition-all duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-20 text-gray-800 hover:text-indigo-600 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-20 text-gray-800 hover:text-indigo-600 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className="focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            {activeSlide === index ? (
              <CircleDot size={12} className="text-white" />
            ) : (
              <Circle
                size={12}
                className="text-white/60 hover:text-white transition-colors"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSlider;
