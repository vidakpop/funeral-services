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
      className="py-16 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 relative text-gray-900 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-yellow-300 opacity-20 w-96 h-96 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div className="absolute bg-yellow-600 opacity-20 w-72 h-72 rounded-full blur-3xl bottom-20 right-40 animate-pulse"></div>
      </div>

      {/* Video or Image Decoration */}
      <div className="absolute inset-0 opacity-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-golden-sea-1186-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-black uppercase">
          How it Works
        </h2>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
          {/* Steps */}
          <div className="pt-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center mb-8 p-4 bg-white bg-opacity-10 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500"
              >
                <div className="text-yellow-500 mx-6 h-12 w-12 flex justify-center items-center rounded-full bg-gray-900 shadow-md">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-lg font-semibold text-white">
                    {index + 1}. {step}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action Section */}
          <div className="flex flex-col justify-center items-center text-white space-y-8">
            <img
              src="https://img.icons8.com/fluency/96/workflow.png"
              alt="Workflow Icon"
              className="w-32 h-32"
            />
            <p className="text-lg font-medium">
              We ensure your experience is smooth, professional, and stress-free.
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
