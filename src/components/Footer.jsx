import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-2">ComfortCare Services &copy; 2024. All rights reserved.</p>
        <p className="text-gray-400">
          Based in Mumias, Kenya. Services offered nationwide. Contact us for details.
        </p>
        <div className="mt-4 space-x-4">
          <a href="https://wa.me/254700000000" className="hover:text-yellow-300">WhatsApp</a>
          <a href="tel:+254700000000" className="hover:text-yellow-300">Call Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
