import React from 'react';

const products = [
  {
    name: 'RhynoSE03 Lite',
    battery: '1.8Kwh',
    batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
    batteryWarranty: '3 years',
    chargingTime: '3 hours (12A)',
    motor: '1500W',
    maxSpeed: '55 km/h',
    electronicsWarranty: '1 year',
    maxRange30: '100 km',
    maxRange45: '90 km',
    maxRangeFull: '60 km',
    keyBenefits: ['Fire-safe Battery', 'Range Prediction', 'Comfortable Ride', 'Stable and Safe'],
  },
  {
    name: 'RhynoSE03',
    battery: '2.7Kwh',
    batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
    batteryWarranty: '3 years',
    chargingTime: '4 hours (12A)',
    motor: '1500W',
    maxSpeed: '55 km/h',
    electronicsWarranty: '1 year',
    maxRange30: '150 km',
    maxRange45: '110 km',
    maxRangeFull: '90 km',
    keyBenefits: ['Fire-safe Battery', 'Range Prediction', 'Comfortable Ride', 'Stable and Safe'],
  },
  {
    name: 'RhynoSE03 Max',
    battery: '2.7Kwh',
    batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
    batteryWarranty: '3 years',
    chargingTime: '4 hours (12A)',
    motor: '2000W',
    maxSpeed: '65 km/h',
    electronicsWarranty: '1 year',
    maxRange30: '120 km',
    maxRange45: '100 km',
    maxRangeFull: '80 km',
    keyBenefits: ['Fire-safe Battery', 'Range Prediction', 'Comfortable Ride', 'Stable and Safe'],
  },
];

const ComparisonCard = ({ product }) => (
  <div className="bg-white-100 speed rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
    <p><strong>Battery:</strong> {product.battery}</p>
    <p><strong>Battery Features:</strong> {product.batteryFeatures}</p>
    <p><strong>Battery Warranty:</strong> {product.batteryWarranty}</p>
    <p><strong>Charging Time:</strong> {product.chargingTime}</p>
    <p><strong>Motor:</strong> {product.motor}</p>
    <p><strong>Max Speed:</strong> {product.maxSpeed}</p>
    <p><strong>Warranty on Electronics:</strong> {product.electronicsWarranty}</p>
    <p><strong>Max Range (@30km/h):</strong> {product.maxRange30}</p>
    <p><strong>Max Range (@45km/h):</strong> {product.maxRange45}</p>
    <p><strong>Max Range (@Full Speed):</strong> {product.maxRangeFull}</p>
    <div className="mt-4">
      <strong>Other Key Benefits:</strong>
      <ul className="list-disc list-inside">
        {product.keyBenefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  </div>
);

const CompareAll = () => (
  <div className="bg-gray-200 min-h-screen p-4">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">RhynoSE03 Product Comparison</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ComparisonCard key={index} product={product} />
        ))}     
      </div>
      <div className="text-center mt-8 font-calibri">
        <p className='font-bold '>Contact Us:</p>
        <p className='font-bold'>Mail: <a  href='#' className='text-blue-600 hover:text-blue-800 font-normal cursor-pointer'> info@rhyno.in</a></p>
        <p className='font-bold'>Mobile no.: <span className='text-blue-600 hover:text-blue-800 font-normal cursor-pointer'>+91-9023987528</span></p>
      </div>
    </div>
  </div>
);

export default CompareAll;
