import React, { useState, useEffect } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

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

  // Move to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Move to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextTestimonial, 6000); // 6-second delay for readability
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-black relative overflow-hidden text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold uppercase tracking-wider">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500">
            What Our Clients Say
          </span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative container mx-auto px-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${100 * testimonials.length}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-4"
            >
              <div
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500 flex flex-col justify-between"
                style={{ height: "300px" }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-tr from-teal-500 via-purple-500 to-blue-500 rounded-full">
                    <MessageCircle className="text-white" size={32} />
                  </div>
                </div>
                <p className="text-gray-300 italic text-center mb-4">
                  "{testimonial.message}"
                </p>
                <h4 className="text-teal-400 font-bold text-center">
                  - {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6 mx-auto max-w-xl">
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
