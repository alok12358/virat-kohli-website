// src/components/StatCard/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 animate-scale-in">
      <h3 className="text-2xl font-bold text-kohli-red mb-3">{title}</h3>
      <p className="text-4xl font-extrabold text-kohli-blue mb-2">{value}</p>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
    </div>
  );
};

export default StatCard;