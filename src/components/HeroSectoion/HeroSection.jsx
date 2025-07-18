// src/components/HeroSection/HeroSection.jsx
import React from 'react';

const HeroSection = ({ image, title, subtitle, quote }) => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label="Virat Kohli in action"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">
          {title}
        </h1>
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium mb-6 drop-shadow-lg animate-fade-in-up delay-200">
          {subtitle}
        </p>
        <blockquote className="text-lg md:text-xl lg:text-2xl italic max-w-3xl mx-auto border-l-4 border-kohli-gold pl-4 py-2 drop-shadow-lg animate-fade-in-up delay-400">
          "{quote}"
        </blockquote>
      </div>
    </section>
  );
};

export default HeroSection;