// src/components/SectionHeader/SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-kohli-blue mb-4 animate-fade-in">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-kohli-dark-gray max-w-3xl mx-auto animate-fade-in delay-200">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;