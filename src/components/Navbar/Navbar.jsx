// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Biography', path: '/biography' },
    { name: 'Stats', path: '/stats' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
  ];

  return (
    <nav className="bg-gradient-to-r from-kohli-blue to-blue-900 p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-white text-3xl font-bold tracking-wider hover:text-kohli-gold transition-colors duration-300 animate-slide-in-left"
        >
          VK18
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-white text-lg font-semibold hover:text-kohli-gold transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-kohli-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden bg-kohli-blue py-2 mt-2 rounded-md shadow-lg animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="block text-white px-4 py-3 text-lg hover:bg-blue-800 transition-colors duration-300" 
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;