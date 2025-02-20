import React from "react";

const SaiKrishnaIndustries = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              src=""
              alt="Sai Krishna Building"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              src=""
              alt="Image 2"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              src=""
              alt="Image 4"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              src=""
              alt="Image 1"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h5 className="text-lg font-semibold text-primary">
            Welcome to  Krishna Poultry Equipments Manufacturers & Trader
          </h5>
          <h1 className="text-4xl font-bold text-gray-800">
            About Sai Krishna Poultry Equipment Manufacturers & Traders
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Sai Krishna Plastic Industries, situated in Hyderabad, Telangana,
            has been a trailblazer in the poultry equipment industry since its
            inception in 2002.
          </p>

          <div className="space-y-4">
            <p className="font-semibold text-gray-800">Leadership:</p>
            <p className="text-gray-600 leading-relaxed">
              Under the expert guidance of Managing Partners, Mr. Srikanth M and
              Naveen Kumar, the company has thrived. With a combined experience
              of 25+ years, they bring unparalleled industry expertise.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-gray-800">
              Infrastructure & Capabilities:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>State-of-the-art infrastructure spanning a vast area</li>
              <li>Advanced Plastic Injection Molding Machines</li>
              <li>Ample storage facilities</li>
              <li>Strategic location in Hyderabad</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-gray-800">Market Presence:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Extensive dealer network across India</li>
              <li>Strong international presence</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-gray-800">Key Strengths:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>25+ years of industry expertise</li>
              <li>Cutting-edge technology</li>
              <li>Pan-India distribution network</li>
              <li>Global export capabilities</li>
              <li>Timely delivery</li>
              <li>Customer satisfaction</li>
              <li>High-quality products</li>
              <li>Adaptability to market demands</li>
            </ul>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="border-l-4 border-primary pl-4">
                <h1 className="text-5xl font-bold text-primary">30</h1>
                <p className="text-gray-600">Years of</p>
                <h6 className="uppercase font-semibold text-gray-800">
                  Experience
                </h6>
              </div>
            </div>
            <div className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="border-l-4 border-primary pl-4">
                <h1 className="text-5xl font-bold text-primary">50</h1>
                <p className="text-gray-600">Number of</p>
                <h6 className="uppercase font-semibold text-gray-800">
                  Products
                </h6>
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <a
            className="inline-block bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
            href="#"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaiKrishnaIndustries;
