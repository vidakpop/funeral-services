import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const testimonials = [
  { name: "John Doe", message: "They made everything so easy during our hard time." },
  { name: "Jane Smith", message: "Exceptional service and care." },
  { name: "Robert K.", message: "Highly recommended!" },
  { name: "Emily Brown", message: "The team was great and the service was exceptional." },
  { name: "Michael Johnson", message: "Best experience ever!" },
  { name: "Sarah Wilson", message: "We love the service and the team worked hard to make it happen." },
  { name: "David Davis", message: "They were very helpful and the service was perfect." },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Set up the interval to change the testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-black relative overflow-hidden text-white">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-purple-500 opacity-20 w-80 h-80 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute bg-blue-500 opacity-20 w-96 h-96 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl font-bold uppercase tracking-wider">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500">
            What Our Clients Say
          </span>
        </h2>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 container mx-auto flex overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full px-6 mb-8 flex-shrink-0 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg transform hover:scale-105 hover:rotate-1 hover:shadow-2xl transition-transform duration-500 group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-tr from-teal-500 via-purple-500 to-blue-500 rounded-full">
                  <MessageCircle className="text-white" size={32} />
                </div>
              </div>
              <p className="text-gray-300 italic text-lg text-center group-hover:text-gray-100 transition-colors duration-500">
                "{testimonial.message}"
              </p>
              <h4 className="mt-4 text-teal-400 font-bold text-center text-xl">
                - {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Rotating Effects */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 rounded-full blur-2xl animate-spin-5s -top-10 -left-32"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-teal-500 opacity-10 rounded-full blur-2xl animate-spin-5s-reverse -bottom-10 -right-32"></div>
    </section>
  );
};

export default Testimonial;
