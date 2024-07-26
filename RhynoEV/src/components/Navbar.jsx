import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);

  const Menues = [
    "About Us", "Products", "Contact Us", "Pre-Book Now",
  ];

  const productsList = [
    { id: 1, name: 'SE03 Lite', link: '/Product1.jsx' },
    { id: 2, name: 'SE03', link: '/Product2.jsx' },
    { id: 3, name: 'SE03 Max', link: '/Product3.jsx' },
  ];

  return (
    <div className="bg-zinc-950 h-12 justify-between ">
      <div >
        <div className="flex flex-1 space-x-32 justify-center">
          {Menues.map((menu) => (
            <div
              key={menu}
              className="mt-2 relative"
              onMouseEnter={() => menu === "Products" && setShowProducts(true)}
              onMouseLeave={() => menu === "Products" && setShowProducts(false)}
            >
              {menu === "Products" ? (
                <>
                  <p className="text-gray-500 hover:text-white cursor-pointer">{menu}</p>
                  {showProducts && (
                    <div className="absolute top-8 left-0 w-28 bg-white shadow-lg p-4 rounded items-center">
                      {productsList.map(product => (
                       
                         <Link key={product.id} to={product.link} className="block  place-items-center text-gray-900 hover:text-blue-500">
                           {product.name}
                         </Link>
                      
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p className="text-gray-500 hover:text-white cursor-pointer">{menu}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
