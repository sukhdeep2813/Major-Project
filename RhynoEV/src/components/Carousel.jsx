import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index}`} className="w-full" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={() =>
              setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
            }
            className="bg-white text-black p-2 pb-3 w-7 rounded-full shadow-lg m-2 "
          >
           ←
          </button>
          <button
            onClick={() =>
              setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
            }
            className="bg-white text-black p-2 pb-3 w-7 rounded-full shadow-lg m-2"
          >
           →
          </button>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default Carousel;
 