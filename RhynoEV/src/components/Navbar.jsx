import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
    { id: 3, name: 'SE03 Max', link: '/product3' },
  ];

  const toggleProductsDropdown = () => setShowProducts(prev => !prev);
  const toggleMobileMenu = () => setShowMobileMenu(prev => !prev);

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
    <div className="bg-zinc-950 h-20 flex justify-between items-center px-4 md:px-10 relative">
      <div>
        <img src='/Logo without tagline.jpg' className='h-16 md:h-28 cursor-pointer mt-1' alt="Logo" />
      </div>
      <div className="hidden md:flex space-x-8">
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
                  className="text-gray-500 hover:text-white-100 cursor-pointer flex items-center gap-x-1.5"
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
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-600 rounded-md bg-white-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform opacity-100 scale-100"
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
                          onClick={() => setShowProducts(false)}  // Close dropdown after clicking link
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link to={menu.link} className="text-gray-500 hover:text-white-100 cursor-pointer">{menu.name}</Link>
            )}
          </div>
        ))}
      </div>
      <div className="md:hidden">
        {/* Mobile menu button */}
        <button
          type="button"
          className="text-gray-500 hover:text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {showMobileMenu && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-10 rounded-md">
          <div className="py-1 bg-white-100 divide-y">
            {Menus.map((menu) => (
              <div key={menu.name}>
                {menu.name === "Products" ? (
                  <div className="px-4 py-2 text-gray-700">
                    <span className="block text-sm font-medium cursor-pointer" onClick={toggleProductsDropdown}>
                      {menu.name}
                    </span>
                    {showProducts && (
                      <div className="mt-2 space-y-2">
                        {productsList.map(product => (
                          <Link
                            key={product.id}
                            to={product.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setShowMobileMenu(false)}  // Close mobile menu after clicking link
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={menu.link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowMobileMenu(false)}  // Close mobile menu after clicking link
                  >
                    {menu.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
