import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-black sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-2xl font-bold">KephaCare Services</h1>
                <ul className="flex space-x-6">
                    <li><a href="#services" className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300">Services</a></li>
                    <li><a href="#pricing" className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300">Pricing</a></li>
                    <li><a href="#testimonials" className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300">Testimonials</a></li>
                    <li><a href="#contact" className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
