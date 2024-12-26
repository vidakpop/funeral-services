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

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-black relative overflow-hidden text-white"
    >
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl font-bold uppercase tracking-wider">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500">
            What Our Clients Say
          </span>
        </h2>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex justify-center items-center">
        <button
          onClick={prevTestimonial}
          className="absolute left-0 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-teal-500 transition-colors z-20"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <div className="flex overflow-hidden relative w-full max-w-4xl">
          {testimonials.map((testimonial, index) => {
            const position = (index - currentIndex + testimonials.length) % testimonials.length;

            // Apply different styles for center, left, and right containers
            const isCenter = position === 0;
            const isLeft = position === testimonials.length - 1;
            const isRight = position === 1;

            const containerStyle = isCenter
              ? "scale-110 z-10 opacity-100"
              : "scale-90 z-0 opacity-50";

            return (
              <div
                key={index}
                className={`absolute transition-transform duration-500 ease-in-out transform ${containerStyle}`}
                style={{
                  left: `${position * 33.33 - 33.33}%`,
                  width: "33.33%",
                  transformOrigin: "center",
                }}
              >
                <div
                  className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg flex flex-col justify-between h-[300px]"
                >
                  <p className="text-gray-300 italic text-center mb-4 overflow-hidden">
                    "{testimonial.message}"
                  </p>
                  <h4 className="text-teal-400 font-bold text-center">
                    - {testimonial.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-teal-500 transition-colors z-20"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
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
      </div>
    </section>
  );
};

export default TestimonialCarousel;
