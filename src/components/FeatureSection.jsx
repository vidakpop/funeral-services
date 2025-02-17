import React, { useState, useEffect } from 'react';
import hearseImage1 from '../assets/images/hearse.jpeg';
import hearseImage2 from '../assets/images/hearse2.jpeg';
import hearseImage3 from '../assets/images/hearse3.jpeg';
import casketImage from '../assets/images/casket.jpeg';
import loweringGearImage from '../assets/images/lowering_gear.jpeg';
import gazeboImage from '../assets/images/gazebo.jpeg';
import carpetImage from '../assets/images/carpet.jpeg';
import gazeboImage2 from '../assets/images/gazebo2.jpeg';

const features = [
  {
    title: "Hearse",
    images: [hearseImage1, hearseImage2, hearseImage3],
    description: "We provide reliable and respectful transport services for the deceased.",
  },
  {
    title: "Casket",
    image: casketImage,
    description: "Choose from a variety of high-quality caskets to honor your loved one.",
  },
  {
    title: "Lowering Gear",
    image: loweringGearImage,
    description: "Our lowering gear ensures a dignified and smooth burial process.",
  },
  {
    title: "Gazebo",
    images: [gazeboImage, gazeboImage2],
    description: "We offer gazebo setups for outdoor services and gatherings.",
  },
  {
    title: "Red/Green Carpet",
    image: carpetImage,
    description: "Red and green carpets are available to enhance the service setting.",
  },
];

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the current image
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(null); // Track the current feature in focus

  useEffect(() => {
    if (currentFeatureIndex !== null) {
      const featureImages = features[currentFeatureIndex].images;

      if (featureImages) {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % featureImages.length);
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
      }
    }
  }, [currentFeatureIndex]); // Run effect when currentFeatureIndex changes

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-r from-purple-900 via-black to-blue-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-purple-700 opacity-20 w-72 h-72 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute bg-blue-600 opacity-20 w-96 h-96 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 uppercase tracking-widest">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Our Services
          </span>
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 shadow-lg rounded-lg overflow-hidden transform transition-all duration-700 group"
              onMouseEnter={() => {
                setCurrentFeatureIndex(index);
                setActiveIndex(0);
              }}
              onMouseLeave={() => {
                setCurrentFeatureIndex(null);
              }}
            >
              {/* Glowing border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-blue-500 transition-all duration-500"></div>

              {/* Image Carousel */}
              {feature.images ? (
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <img
                    src={feature.images[activeIndex]}
                    alt={`${feature.title} ${activeIndex + 1}`}
                    className="w-full h-48 object-cover rounded-lg transition-all duration-500"
                  />
                </div>
              ) : (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg transform group-hover:rotate-1 group-hover:scale-110 transition-all duration-500"
                />
              )}

              {/* Title and Description */}
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-all duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-all duration-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
