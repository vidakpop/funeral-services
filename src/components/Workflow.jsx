import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Workflow = () => {
  const steps = [
    "Contact us to discuss your needs.",
    "Choose your preferred services.",
    "Receive confirmation and details.",
    "We handle the rest with care and professionalism.",
  ];

  return (
    <section
      id="workflow"
      className="py-16 bg-gradient-to-r from-purple-900 via-black to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-blue-700 opacity-20 w-96 h-96 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div className="absolute bg-purple-700 opacity-20 w-72 h-72 rounded-full blur-3xl bottom-20 right-40 animate-pulse"></div>
      </div>

      {/* Section Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-10 uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
            How It Works
          </span>
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 relative z-10">
        {/* Workflow Steps */}
        <div className="pt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center mb-8 p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:bg-opacity-20"
            >
              <div className="flex justify-center items-center text-green-400 h-12 w-12 rounded-full bg-gray-800 shadow-md">
                <CheckCircle2 size={28} />
              </div>
              <div className="ml-4">
                <h5 className="text-lg font-semibold text-white">{index + 1}. {step}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Book Now Section */}
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <h3 className="text-xl font-semibold">Ready to Book?</h3>
          <p className="text-sm">
            Contact us via WhatsApp or phone to discuss your requirements and confirm your booking!
          </p>

          <div className="flex space-x-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/254729489524"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
            >
              Book Now via WhatsApp
            </a>

            {/* Phone Call Button */}
            <a
              href="tel:+254797277111"
              className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              Call to Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
