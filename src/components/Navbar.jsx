import React from "react";

const Navbar =() => {
    return (
        <nav className="bg-gradient-to-r from-blue-800 to-purple-800 shadow-lg py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-white text-2xl font-bold">KephaCare Services</h1>
                <ul className="flex space-x-6">
                    <li><a href="#services" className="text-white hover:text-yellow-300">Services</a></li>
                    <li><a href="#pricing" className="text-white hover:text-yellow-300">Pricing</a></li>
                    <li><a href="#testimonials" className="text-white hover:text-yellow-300">Testimonials</a></li>
                    <li><a href="#contact" className="text-white hover:text-yellow-300">Contact</a></li>

                </ul>

            </div>
        </nav>
    )
}
export default Navbar;