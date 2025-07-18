// src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-kohli-blue text-white p-6 text-center shadow-inner">
      <div className="container mx-auto">
        <p className="text-sm md:text-base mb-2">
          &copy; {new Date().getFullYear()} Virat Kohli Fan Website. All rights reserved.
        </p>
        <p className="text-xs md:text-sm">
          Disclaimer: This is a fan-made website and is not affiliated with Virat Kohli or his official management.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Social media links (replace with actual links) */}
          <a href="#" className="text-white hover:text-kohli-gold transition-colors duration-300" aria-label="Facebook">
            <i className="fab fa-facebook-f text-xl"></i> {/* Requires Font Awesome CDN or package */}
          </a>
          <a href="#" className="text-white hover:text-kohli-gold transition-colors duration-300" aria-label="Twitter">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-kohli-gold transition-colors duration-300" aria-label="Instagram">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          {/* Add other social media icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;