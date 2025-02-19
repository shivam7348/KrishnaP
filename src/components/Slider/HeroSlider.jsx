import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://www.saikrishnapoultry.co.in/img/slider.png",
      title: "Premium Poultry Equipment",
      description: "The Poultry Professional Transforming Farming",
      rotatingImage: "https://www.polypoultry.com/assets/collage-1.jpeg",
    },
    {
      image: "https://www.saikrishnapoultry.co.in/img/slider.png",
      title: "Professional Solutions",
      description: "Complete range of poultry farming equipment",
      rotatingImage: "https://via.placeholder.com/150",
    },
    {
      image: "https://www.saikrishnapoultry.co.in/img/slider.png",
      title: "Expert Support",
      description: "24/7 customer service and technical assistance",
      rotatingImage: "https://via.placeholder.com/150",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden ">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />{" "}
            {/* Dark Overlay */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center">
              <div className="flex items-center gap-6">
                <h2 className="text-5xl font-bold animate-fadeIn">
                  {slide.title}
                </h2>
                <img
                  src={slide.rotatingImage}
                  alt="Rotating"
                  className="w-48 h-48 animate-spin-slow" 
                />
              </div>
              <p className="text-xl mt-4 animate-fadeIn delay-200">
                {slide.description}
              </p>
              <button className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300 animate-fadeIn delay-400">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;