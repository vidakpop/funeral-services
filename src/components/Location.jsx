import React from "react";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="relative py-16 bg-gradient-to-br from-blue-900 via-purple-800 to-black text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-purple-500 opacity-20 w-96 h-96 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute bg-blue-500 opacity-20 w-[120px] h-[120px] rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl font-bold tracking-wide uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500">
            Our Location
          </span>
        </h2>
        <div className="mt-4 flex justify-center items-center">
          <MapPin size={36} className="text-teal-300 animate-bounce" />
        </div>
      </div>

      {/* Location Description */}
      <div className="relative z-10 container mx-auto px-4">
        <p className="text-center text-lg font-semibold mb-8 max-w-2xl mx-auto leading-relaxed">
          Our services are offered throughout Kenya, and we are proudly based in Mumias. Visit us or contact us for exceptional services tailored to your needs.
        </p>
      </div>

      {/* Google Map Embed */}
      <div className="relative z-10 flex justify-center">
        <div className="relative shadow-2xl hover:scale-105 transition-transform duration-500">
          <iframe
            className="rounded-lg border-4 border-teal-400 shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63921.01923335862!2d34.47795017694384!3d-0.3447219363748809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17810f91db2e4433%3A0x222d3656a2dc4e7d!2sMumias%2C%20Kenya!5e0!3m2!1sen!2sus!4v1695000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            title="Mumias Location"
          ></iframe>
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-20 blur-md"></div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center mt-8">
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Get Directions
        </a>
      </div>

      {/* Rotating Effects */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 rounded-full blur-2xl animate-spin-5s -top-10 -left-32"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-teal-500 opacity-10 rounded-full blur-2xl animate-spin-5s-reverse -bottom-10 -right-32"></div>
    </section>
  );
};

export default Location;
