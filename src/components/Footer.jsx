import React from "react";
import { FaWhatsapp, FaPhone, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-purple-400 opacity-20 blur-3xl top-0 left-20 animate-pulse"></div>
        <div className="absolute w-80 h-80  bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto text-center relative z-10 space-y-8">
        {/* Branding */}
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700">
            Dove Funeral Services
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            &copy; 2024. All rights reserved. Based in Mumias, Kenya. Services offered nationwide.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://wa.me/254729489524"
            className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-500 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
            <span>WhatsApp</span>
          </a>
          <a
            href="tel:+254797277111"
            className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-500 transition duration-300"
          >
            <FaPhone size={24} />
            <span>Call Us</span>
          </a>
          <a
            href="mailto:support@comfortcare.com"
            className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-500 transition duration-300"
          >
            <FaEnvelope size={24} />
            <span>Email</span>
          </a>
        </div>

        {/* Meet the Developer */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 mb-6">
            Meet the Developer
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/vidakpop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300 transition duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/davis-ngetich-690b6521b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300 transition duration-300"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:cyberjiutsu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300 transition duration-300"
            >
              <FaEnvelope size={32} />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Designed and developed with ❤️ by <span className="font-bold text-yellow-300">Vidakpop</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
