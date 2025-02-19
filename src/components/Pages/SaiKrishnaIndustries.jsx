import React from "react";

const SaiKrishnaIndustries = () => {
  return (
    <div className="container mx-auto py-5 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-start">
            <img
              className="w-full rounded shadow-md"
              src="https://www.saikrishnapoultry.co.in/img/saikrishna-building.png"
              alt="Sai Krishna Building"
            />
          </div>
          <div className="text-start">
            <img
              className="w-full rounded shadow-md mt-6"
              src="https://www.saikrishnapoultry.co.in/img/img-2.png"
              alt="Image 2"
            />
          </div>
          <div className="text-end">
            <img
              className="w-full rounded shadow-md"
              src="https://www.saikrishnapoultry.co.in/img/img-2.png"
              alt="Image 4"
            />
          </div>
          <div className="text-end">
            <img
              className="w-full rounded shadow-md"
              src="https://www.saikrishnapoultry.co.in/img/img-2.png"
              alt="Image 1"
            />
          </div>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-primary">
            Welcome to Sai Krishna Plastic Industries
          </h5>
          <h1 className="text-3xl font-bold mb-4">
            About Sai Krishna Plastic Industries
          </h1>
          <p className="mb-4">
            Sai Krishna Plastic Industries, situated in Hyderabad, Telangana,
            has been a trailblazer in the poultry equipment industry since its
            inception in 2002.
          </p>
          <p className="mb-4 font-semibold">Leadership:</p>
          <p className="mb-4">
            Under the expert guidance of Managing Partners, Mr. Srikanth M and
            Naveen Kumar, the company has thrived. With a combined experience of
            25+ years, they bring unparalleled industry expertise.
          </p>

          <p className="mb-4 font-semibold">Infrastructure & Capabilities:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>State-of-the-art infrastructure spanning a vast area</li>
            <li>Advanced Plastic Injection Molding Machines</li>
            <li>Ample storage facilities</li>
            <li>Strategic location in Hyderabad</li>
          </ul>

          <p className="mb-4 font-semibold">Market Presence:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Extensive dealer network across India</li>
            <li>Strong international presence</li>
          </ul>

          <p className="mb-4 font-semibold">Key Strengths:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>25+ years of industry expertise</li>
            <li>Cutting-edge technology</li>
            <li>Pan-India distribution network</li>
            <li>Global export capabilities</li>
            <li>Timely delivery</li>
            <li>Customer satisfaction</li>
            <li>High-quality products</li>
            <li>Adaptability to market demands</li>
          </ul>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center border-l-4 border-primary pl-4">
              <h1 className="text-4xl font-bold text-primary">30</h1>
              <div className="pl-4">
                <p className="mb-0">Years of</p>
                <h6 className="uppercase font-semibold">Experience</h6>
              </div>
            </div>
            <div className="flex items-center border-l-4 border-primary pl-4">
              <h1 className="text-4xl font-bold text-primary">50</h1>
              <div className="pl-4">
                <p className="mb-0">Number of</p>
                <h6 className="uppercase font-semibold">Products</h6>
              </div>
            </div>
          </div>
          <a
            className="inline-block bg-primary text-white py-3 px-5 rounded-lg hover:bg-opacity-90 transition"
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
