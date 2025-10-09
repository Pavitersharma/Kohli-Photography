import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Kohli Photography" className="w-36 md:w-40" />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/home" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/services" className="hover:text-yellow-500 transition">Services</Link>
          <Link to="/portfolio" className="hover:text-yellow-500 transition">Portfolio</Link>
          <Link to="/about" className="hover:text-yellow-500 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
          <a 
            href="#get-started" 
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black flex flex-col items-center space-y-4 py-6 border-t border-gray-700">
          <a href="#home" className="hover:text-yellow-500 transition">Home</a>
          <a href="#services" className="hover:text-yellow-500 transition">Services</a>
          <a href="#portfolio" className="hover:text-yellow-500 transition">Portfolio</a>
          <a href="#about" className="hover:text-yellow-500 transition">About</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
          <a 
            href="#get-started" 
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
