import React from "react";

import FloatingActionFooter from "./FloatingActionFooter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Logo" className="w-17 h-17 mb-4" />
            <nav className="flex flex-col space-y-2">
              <a href="index.html" className="hover:underline">
                Home
              </a>
              <a href="about-us.html" className="hover:underline">
                About
              </a>
              <a href="our-products.html" className="hover:underline">
                Products
              </a>
              <a href="contact.html" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">Contact</h4>
            <p className="text-sm">Hyderabad Factory - Kondapur</p>
            <p className="text-gray-400">
              Industrial Park Kondapur, Medak Dist - 502 336, Telangana.
            </p>
            <p className="text-sm">Karimnagar Factory</p>
            <p className="text-gray-400">
              Behind Petrol Bunk, Padmanagar, Karimnagar - 505002, Telangana.
            </p>
            <p className="text-gray-400">📞 9440406200, 9849059508</p>
            <p className="text-sm">Hyderabad Sales Depot - Nagole</p>
            <p className="text-gray-400">
              Plot No: 16, Road No: 2, Mamatanagar Colony, Nagole, Hyderabad -
              68
            </p>
            <p className="text-gray-400">📞 9246659508, 8897911508</p>
            <p className="text-gray-400">📧 info@krishnapoultry.com</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">Opening</h4>
            <p className="text-gray-400">Monday - Saturday: 09AM - 09PM</p>
            <p className="text-gray-400">Sunday: 10AM - 08PM</p>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">Google Map</h4>
            <iframe
              className="w-full h-40"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503130.135087622!2d79.097002!3d18.440857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccdfd080c233b3%3A0xdffdfa7ea808c2b6!2sSai%20krishna%20poultry%20equipments!5e0!3m2!1sen!2sin!4v1731940118279!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">
          &copy;{" "}
          <a href="#" className="hover:underline">
           Krishna Poultry Equipments
          </a>
          , All Rights Reserved.
        </div>
      </div>
        <FloatingActionFooter/>
    </footer>
  );
};

export default Footer;
