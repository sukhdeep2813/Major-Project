import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const itemsWithLinks = [
    "Privacy Policy",
    "Refund Policy",
    "Website Policy",
    "Contact Us",
    "Products",
    "Career",
    "Rentals"
  ];

  return (
    <section className="w-full footer p-6 bg-[#252525] text-gray-500">
      <div className="flex justify-center mb-2">
        <div className="h-auto w-44">
          <img src="/Logo without tagline.jpg" className="mx-auto cursor-pointer" alt="Logo" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center space-x-5 md:space-x-10 mb-4">
        {itemsWithLinks.map((item, index) => (
          <div key={index} className="my-2 md:my-0">
           {item === "Contact Us" || item === "Career" || item === "Rentals"?
           (<div className='text-sm font-lato font-bold cursor-pointer'>
             <Link to={`/${item.replace(/ /g, '-').toLowerCase()}`}>{item}</Link>
            
            </div>): <p className="text-sm font-lato font-bold cursor-pointer">{item}</p>}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <p className="font-calibri text-gray-500 mb-2">Social Media</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-blue-700">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-500">&copy; 2024 Rhyno EV. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
