import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const testimonials = [
  { name: "Mwangi Wafula", message: "They made everything so easy during our hard time." },
  { name: "Achieng Ochieng", message: "Exceptional service and care." },
  { name: "Kiprotich Mutai", message: "Highly recommended!" },
  { name: "Wanjiru Njenga", message: "The team was great and the service was exceptional." },
  { name: "Omondi Onyango", message: "Best experience ever!" },
  { name: "Njeri Kamau", message: "We love the service and the team worked hard to make it happen." },
  { name: "Otieno Okello", message: "They were very helpful and the service was perfect." },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Automatically slide between testimonials
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white relative overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold uppercase tracking-wider">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500">
            What Our Clients Say
          </span>
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="relative flex justify-center items-center h-72">
        <div className="absolute inset-0 flex justify-center items-center transition-all duration-500 ease-in-out">
          <div className="w-[90%] max-w-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500 text-center">
            <p className="text-gray-300 italic mb-4">"{testimonials[currentIndex].message}"</p>
            <h4 className="text-teal-400 font-bold">- {testimonials[currentIndex].name}</h4>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center mt-6 space-x-6">
        <button
          onClick={prevTestimonial}
          className="bg-gray-800 p-3 rounded-full shadow-lg hover:bg-teal-500 transition-colors"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-gray-800 p-3 rounded-full shadow-lg hover:bg-teal-500 transition-colors"
        >
          {isPlaying ? (
            <Pause size={24} className="text-white" />
          ) : (
            <Play size={24} className="text-white" />
          )}
        </button>

        <button
          onClick={nextTestimonial}
          className="bg-gray-800 p-3 rounded-full shadow-lg hover:bg-teal-500 transition-colors"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-6 space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-teal-500"
                : "bg-gray-500 hover:bg-teal-500 transition-colors"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
