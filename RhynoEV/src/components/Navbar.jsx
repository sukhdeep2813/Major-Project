import React from 'react';
import { Link } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const Menues = [
    "Home", "Aboutus", "Products", "Contactus", "Pre-booknow", "Instagram", "Linkedin"
  ];

  return (
    <header className="bg-black h-12 justify-between w-full">
      <nav>
        <div className="flex flex-1 grow space-x-36 justify-center">
          {Menues.map((menu) => (
            <div key={menu} className="text-yellow mt-2 cursor-pointer">
              {menu === "Instagram" ? (
                <div>  
                  <p className="text-gray hover:text-white text-sm">Instagram</p>
                  <Link href="https://www.instagram.com" isExternal>
                    <FaInstagram className="text-gray hover:text-pink-950 text-sm" size="24px" />
                  </Link>
                </div>
              ) : menu === "Linkedin" ? (
                <div>
                  <p className="text-gray hover:text-white">Linkdin</p>
                  <Link href="https://www.linkedin.com" isExternal>
                     <FaLinkedin className="text-gray hover:text-blue-700" size="24px" />
                  </Link>
                </div>
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
