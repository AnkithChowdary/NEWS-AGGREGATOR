import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">News Aggregator</h1>
        <div>
          <Link to="/" className="text-white mx-2 hover:underline">Home</Link>
          <Link to="/about" className="text-white mx-2 hover:underline">About Us</Link>
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
