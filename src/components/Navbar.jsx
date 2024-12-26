import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand Name */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-2xl font-bold hover:text-yellow-300">
          Dove Funeral Services
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#services"
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-700/80">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#services"
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
