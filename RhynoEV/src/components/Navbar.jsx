import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-darkgrey p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-poppins text-lg">Rhyno</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-yellow">Home</Link>
          <Link to="/aboutus" className="text-white hover:text-yellow">About Us</Link>
          <Link to="/products/se03lite" className="text-white hover:text-yellow">Products</Link>
          <Link to="/contactus" className="text-white hover:text-yellow">Contact Us</Link>
          <Link to="/prebook" className="text-white hover:text-yellow">Pre-Book Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
