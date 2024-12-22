import React from "react";

const Location = () => {
  return (
    <section id="location" className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Our Location</h2>
      <div className="container mx-auto px-4">
        <p className="text-center text-lg font-semibold mb-4">
          Our services are offered throughout Kenya, and we are based in Mumias.
        </p>
        <div className="flex justify-center">
          <iframe
            className="rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63921.01923335862!2d34.47795017694384!3d-0.3447219363748809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17810f91db2e4433%3A0x222d3656a2dc4e7d!2sMumias%2C%20Kenya!5e0!3m2!1sen!2sus!4v1695000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            title="Mumias Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
