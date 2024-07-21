import React from 'react';
import { Link } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const Menues = [
    "Home", "About Us", "Products", "Contact Us", "Pre-booknow", "Instagram", "Linkedin"
  ];

  return (
    <header className="bg-zinc-950 h-12 justify-between w-full">
      <nav>
        <div className="flex flex-1 grow space-x-32 justify-center">
          {Menues.map((menu) => (
            <div key={menu} className="text-white mt-2 cursor-pointer">
              {menu === "Instagram" ? (
                
                  
                  <Link href="https://www.instagram.com" isExternal className='flex'>
                    <p className="text-gray hover:text-white text-sm mr-1">Instagram</p>
                    <FaInstagram className="text-gray hover:text-pink-950 text-sm" size="24px" />
                  </Link>
                
              ) : menu === "Linkedin" ? (
               
                 
                  <Link href="https://www.linkedin.com" isExternal className='flex'>
                     <p className="text-gray hover:text-white mr-1">Linkdin</p>
                     <FaLinkedin className="text-gray hover:text-blue-700" size="24px" />
                  </Link>
                
              ) : (
                <p className="text-gray hover:text-white">{menu}</p>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
