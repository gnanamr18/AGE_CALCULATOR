// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center  bg-violet-800">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found !</h1>
      <Link 
        to="/" 
        className="text-white underline text-lg hover:text-green-700"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
