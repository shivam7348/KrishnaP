import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productLinks = [
    { name: "FEEDER", path: "/products/feeder" },
    { name: "DRINKER", path: "/products/drinker" },
    { name: "BROODER & DEBEAKER", path: "/products/brooder-debeaker" },
    { name: "BIRD TRAY", path: "/products/bird-tray" },
    { name: "OTHERS", path: "/products/others" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-red-700 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="tel:9246659508"
              className="flex items-center hover:text-gray-200 transition-colors"
            >
              <Phone size={16} className="mr-2" />
              <span>924-665-9508</span>
            </a>
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-gray-200 transition-colors" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-gray-200 transition-colors" />
            <Youtube className="w-4 h-4 cursor-pointer hover:text-gray-200 transition-colors" />
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-gray-200 transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`container mx-auto px-4 py-4 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            </Link>
            <div className="hidden md:block">
              <h1 className="text-red-700 font-bold text-xl">
                KRISHNA POULTRY EQUIP
              </h1>
              <p className="text-gray-600 text-sm">MANUFACTURERS & TRADER</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <Link
                to="/products"
                className="nav-link flex items-center"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                PRODUCTS
                <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 ${
                  activeDropdown === "products"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {productLinks.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>

            <a
              href="tel:9246659508"
              className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} mt-4`}
        >
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="mobile-nav-link">
              HOME
            </Link>
            <Link to="/about" className="mobile-nav-link">
              ABOUT
            </Link>

            <div className="space-y-2">
              <button
                className="w-full flex items-center justify-between mobile-nav-link"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "mobile-products"
                      ? null
                      : "mobile-products"
                  )
                }
              >
                PRODUCTS
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "mobile-products" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`space-y-2 pl-4 ${
                  activeDropdown === "mobile-products" ? "block" : "hidden"
                }`}
              >
                {productLinks.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block py-2 text-gray-600 hover:text-red-700"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="mobile-nav-link">
              CONTACT
            </Link>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          @apply text-gray-700 hover:text-red-700 font-medium transition-colors;
        }

        .mobile-nav-link {
          @apply text-gray-700 hover:text-red-700 font-medium py-2 transition-colors;
        }
      `}</style>
    </header>
  );
};

export default Header;
