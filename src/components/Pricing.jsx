import React from 'react';

const pricing = [
  { service: "Transport", contact: "+254729489524" },
  { service: "Casket", contact: "+254729489524" },
  { service: "Lowering Gear", contact: "+254729489524" },
  { service: "Gazebo", contact: "+254729489524" },
  { service: "Red/Green Carpet", contact: "+254729489524" },
];

const Pricing = () => {
  return (
    <section
      id='pricing'
      className='py-16 bg-gradient-to-r from-purple-900 via-black to-blue-900 text-white relative overflow-hidden'
    >
      {/* Background Glow Effects */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute bg-blue-700 opacity-20 w-96 h-96 rounded-full blur-3xl top-10 left-20 animate-pulse'></div>
        <div className='absolute bg-purple-700 opacity-20 w-72 h-72 rounded-full blur-3xl bottom-20 right-40 animate-pulse'></div>
      </div>

      {/* Section Content */}
      <div className='relative z-10'>
        <h2 className='text-center text-4xl font-bold mb-12 uppercase tracking-wide'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500'>
            Pricing & Negotiations
          </span>
        </h2>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6'>
          {pricing.map((item, index) => (
            <div
              key={index}
              className='relative bg-white bg-opacity-10 p-6 shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-700 group'
            >
              {/* Glassy Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-400 via-transparent to-blue-400 opacity-30 rounded-lg blur-xl'></div>
              {/* Glowing Border */}
              <div className='absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-purple-500 transition-all duration-500'></div>

              {/* Service Details */}
              <div className='relative z-10 text-center'>
                <h3 className='text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-all duration-500'>
                  {item.service}
                </h3>
                <p className='text-gray-300 mb-4'>
                  Pricing depends on location and is negotiable.
                </p>
                <div className='flex justify-center space-x-4'>
                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${item.contact.replace('+', '')}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center px-4 py-2 bg-green-500 bg-opacity-80 rounded-full shadow-md text-white font-semibold text-sm hover:bg-green-600 transform transition-all duration-300'
                  >
                    <img
                      src='https://img.icons8.com/color/48/whatsapp.png'
                      alt='WhatsApp'
                      className='w-5 h-5 mr-2'
                    />
                    Chat on WhatsApp
                  </a>

                  {/* Call Button */}
                  <a
                    href={`tel:${item.contact}`}
                    className='flex items-center px-4 py-2 bg-blue-500 bg-opacity-80 rounded-full shadow-md text-white font-semibold text-sm hover:bg-blue-600 transform transition-all duration-300'
                  >
                    <img
                      src='https://img.icons8.com/fluency/48/phone.png'
                      alt='Phone'
                      className='w-5 h-5 mr-2'
                    />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
