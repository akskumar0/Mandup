import React from 'react';
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        <a href="/" className="text-2xl font-bold text-red"><img src={logo} /></a>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-red">Home</a>
          <a href="/" className="text-gray-700 hover:text-red">Venues</a>
          <a href="/" className="text-gray-700 hover:text-red">E-invites</a>
          <a href="/" className="text-gray-700 hover:text-red">Services</a>
          <a href="/" className="text-gray-700 hover:text-red">Love Notes</a>
          <a href="/" className="text-gray-700 hover:text-red">Blogs</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-red">Login</button>
          <button className="bg-red text-white px-4 py-2 rounded-lg hover:bg-red">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;