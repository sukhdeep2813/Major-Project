import React from 'react';

const ProductCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="\black.png" alt="Rhyno SE03 Lite" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Rhyno SE03 Lite</div>
        <p className="text-gray-700 text-base">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Color 1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Color 2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Color 3</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
