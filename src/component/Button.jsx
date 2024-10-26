import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 w-full text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200"
    >
      {children}
    </button>
  );
};

export default Button;
