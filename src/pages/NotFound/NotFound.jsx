// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-kohli-red to-rose-700 text-white p-8 pt-24 text-center">
      <h1 className="text-6xl md:text-9xl font-extrabold mb-4 drop-shadow-lg">404</h1>
      <p className="text-2xl md:text-4xl font-semibold mb-8">Page Not Found</p>
      <p className="text-lg md:text-xl mb-12 max-w-xl">
        Oops! It looks like you've wandered off the pitch. The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        className="inline-block bg-white text-kohli-red font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;