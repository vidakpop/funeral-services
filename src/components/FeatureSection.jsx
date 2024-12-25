import React from 'react';

const features = [
  { title: "Hearse", image: "/images/transport.jpg", description: "We provide reliable and respectful transport services for the deceased." },
  { title: "Casket", image: "..l/assets/images/casket.jpeg", description: "Choose from a variety of high-quality caskets to honor your loved one." },
  { title: "Lowering Gear", image: "/images/lowering_gear.jpeg", description: "Our lowering gear ensures a dignified and smooth burial process." },
  { title: "Gazebo", image: "/images/gazebo.jpg", description: "We offer gazebo setups for outdoor services and gatherings." },
  { title: "Red/Green Carpet", image: "/images/carpet.jpg", description: "Red and green carpets are available to enhance the service setting." },
];

const FeatureSection = () => {
  return (
  <section id='services' className='py-16 bg-gray-900 text-white'>
    <h2 className='text-center text-3xl font-bold mb-10'>Our Services</h2>
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
      {features.map((feature, index) => (
        <div key={index} className='bg-gray-800 p-6 shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105'>
          <img src={feature.image} alt={feature.title} className='w-full h-40 object-cover mb-4 rounded-lg' />
          <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
  );
}

export default FeatureSection;
