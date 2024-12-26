import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const testimonials = [
  { name: "John Doe", message: "They made everything so easy during our hard time." },
  { name: "Jane Smith", message: "Exceptional service and care." },
  { name: "Robert K.", message: "Highly recommended!" },
  { name: "Emily Brown", message: "The team was great and the service was exceptional." },
  { name: "Michael Johnson", message: "Best experience ever!" },
  { name: "Sarah Wilson", message: "We love the service and the team worked hard to make it happen." },
  { name: "David Davis", message: "They were very helpful and the service was perfect." },
];

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The Testimonial component displays a section of the website
 * with customer testimonials. The component uses the
 * `useState` and `useEffect` hooks to manage the state of
 * the testimonials and the number of items to show per slide.
 *
 * The component also uses the `useEffect` hook to set up
 * an interval that changes the testimonials every 5 seconds.
 *
 * The component also uses the `useEffect` hook to adjust the
 * number of items per slide based on the screen width.
 *
 * @returns The Testimonial component
 */
/******  965ae424-1342-40b5-9abc-502b577e31db  *******/const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1); // Adjusts based on screen size

  // Change testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= Math.ceil(testimonials.length / itemsPerSlide) ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  // Adjust items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2); // Tablet
      } else {
        setItemsPerSlide(1); // Mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-black relative overflow-hidden text-white"
    >
      {/* Section Title */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl font-bold uppercase tracking-wider">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500">
            What Our Clients Say
          </span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 container mx-auto px-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${(100 * testimonials.length) / itemsPerSlide}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-4 w-[calc(100%/${itemsPerSlide})]`}
            >
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500">
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
      <div className="flex justify-center mt-6 space-x-4">
        {Array.from(
          { length: Math.ceil(testimonials.length / itemsPerSlide) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-teal-500"
                  : "bg-gray-500 hover:bg-teal-500 transition-colors"
              }`}
            ></button>
          )
        )}
      </div>
    </section>
  );
};

export default Testimonial;
