import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import Footer from '../components/Footer';

const Product2 = () => {
  // Array of image URLs
  const images = {
    Red: "/bike.png",
    Black: "/black.png", 
    Golden: "/golden.png",
    Blue: "/blue.png"
  };

  // State to keep track of the currently selected image
  const [currentImage, setCurrentImage] = useState(images.Black);

  // Handler to update the current image based on the color
  const handleColorClick = (color) => {
    setCurrentImage(images[color]);
  };

  return (
    <div className="w-full h-full rounded overflow-hidden shadow-lg">
      <Navbar />

      <div className="flex flex-col md:flex-row bg-black text-white bg-black-200  ">
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center ">
          <div className="px-6 py-4">
            <div className="font-bold text-5xl mb-2 font-calibri  text-white-200">Rhyno SE03 Lite</div>
            <p className="text-slate-300 text-base font-calibri">
            Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!

            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <div
              onClick={() => handleColorClick('Red')}
              className="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 cursor-pointer transition-transform transform hover:scale-105 active:scale-95 active:shadow-inner"
            >
              <span>Red</span>
            </div>
            <div
              onClick={() => handleColorClick('Black')}
              className="inline-block bg-zinc-950 text-white-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 cursor-pointer transition-transform transform hover:scale-105 active:scale-95 active:shadow-inner"
            >
              <span>Black</span>
            </div>
           
            <div
              onClick={() => handleColorClick('Golden')}
              className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 cursor-pointer transition-transform transform hover:scale-105 active:scale-95 active:shadow-inner"
            >
              <span>Golden</span>
            </div>
            <div
              onClick={() => handleColorClick('Blue')}
              className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 cursor-pointer transition-transform transform hover:scale-105 active:scale-95 active:shadow-inner"
            >
              <span>Blue</span>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:shadow-inner active:scale-95">
              Buy Now
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-5 flex items-center justify-center">
          <img className="w-full h-auto object-cover" src={currentImage} alt="Rhyno SE03 Lite" />
        </div>
      </div>


       <div className='flex h-full'>

          <div className='w-64'>
            <p className='left-2 p-3 text-3xl  font-bold font-calibri'>SE03 Lite</p>
          </div>
          <div className=' mt-20 w-4/5 max-w-5xl '>
            <Table/>
          </div>

       </div>
      <div className='mt-5'>
      <Footer/> 
      </div>
    </div>
  );
};

export default Product2;
