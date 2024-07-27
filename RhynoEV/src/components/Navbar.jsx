import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const dropdownRef = useRef(null);

  const Menus = [
    { name: "About Us", link: "/about-us" },
    { name: "Products", link: "#" },  // '#' as placeholder, actual links are in productsList
    { name: "Contact Us", link: "/contact-us" },
    { name: "Pre-Book Now", link: "/pre-book" },
  ];

  const productsList = [
    { id: 1, name: 'SE03 Lite', link: '/product1' },
    { id: 2, name: 'SE03', link: '/product2' },
    { id: 3, name: 'SE03 Max', link: '/Product3' },
  ];

  const toggleProductsDropdown = () => setShowProducts(prev => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProducts(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-zinc-950 h-12 flex justify-center items-center">
      <div className='left-2 absolute'>
        <img src='/Logo without tagline.jpg' className='h-28 items-baseline cursor-pointer mt-1' alt="Logo" />
      </div>
      <div className="flex space-x-32">
        {Menus.map((menu) => (
          <div
            key={menu.name}
            className="relative"
            ref={menu.name === "Products" ? dropdownRef : null}
          >
            {menu.name === "Products" ? (
              <>
                <button
                  type="button"
                  className="text-gray-500 hover:text-white cursor-pointer flex items-center gap-x-1.5"
                  onClick={toggleProductsDropdown}
                  aria-expanded={showProducts}
                  aria-haspopup="true"
                >
                  {menu.name}
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                {showProducts && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform opacity-100 scale-100"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1">
                      {productsList.map(product => (
                        <Link
                          key={product.id}
                          to={product.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link to={menu.link} className="text-gray-500 hover:text-white cursor-pointer">{menu.name}</Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
