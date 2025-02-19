import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full relative">
      <nav className="flex flex-wrap items-center justify-between bg-gray-900 p-4">
        {/* Logo and mobile menu button */}
        <div className="w-full lg:w-1/3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="img/logo-SKPE.png" className="h-12" alt="Logo" />
          </Link>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full lg:w-1/2 ${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex items-center justify-end`}
        >
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <Link
              to="/"
              className="text-white hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <Link
                to="/products"
                className="text-white hover:text-gray-400 focus:outline-none flex items-center"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                Products
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {isDropdownOpen && (
                <div
                  className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/products/feeder"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Feeder
                  </Link>
                  <Link
                    to="/products/drinker"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Drinker
                  </Link>
                  <Link
                    to="/products/brooder-debeaker"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Brooder & Debeaker
                  </Link>
                  <Link
                    to="/products/bird-tray"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Bird Tray
                  </Link>
                  <Link
                    to="/products/others"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Others
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-white hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:9246659508"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call us: 9246659508
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div
          className={`w-full lg:w-1/6 ${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex justify-center mt-4 lg:mt-0`}
        >
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
