import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="h-full w-full footer p-6 bg-[#252525]">
      <div className='flex justify-center mb-2'>
        <div className='h-auto w-44'>
          <img src='/Logo without tagline.jpg' className='mx-auto' />
        </div>
      </div>
      <div className='space-x-10 flex flex-1 justify-center flex-wrap text-gray-500'>
        <div>
          <p className='text-sm font-lato font-bold cursor-pointer'>Privacy Policy</p>
        </div>
        <div>
          <p className='text-sm font-lato font-bold cursor-pointer'>Refund Policy</p>
        </div>
        <div>
          <p className='text-sm font-lato font-bold cursor-pointer'>Website Policy</p>
        </div>
        <div>
          <p className='text-sm font-lato font-bold cursor-pointer'>Contact Us</p>
        </div>
        <div>
          <p className='text-sm font-lato font-bold cursor-pointer'>Products</p>
        </div>
        <div>
          <a href="https://linkedin.com" className='text-sm font-lato font-bold cursor-pointer'>Career</a>
        </div>
        <div>
          <p className='text-sm font-lato font-bold cursor-pointer'>Rentals</p>
        </div>
      </div>
      <div className='justify-center p-5 flex-col'>
        <div>
          <p className='text-center font-calibri text-gray-500  mb-5'>Social Media</p>
        </div>
        <div>
          <div className='flex flex-1 justify-center space-x-10'>
            <a href="https://facebook.com" className="mx-2 text-white hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="mx-2 text-white hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="mx-2 text-white hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="mx-2 text-white hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-950">&copy; 2024 SkillTank. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;
