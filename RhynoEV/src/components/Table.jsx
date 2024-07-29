import React from 'react';

const Table = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="bg-gray-50">
            <td colSpan="2" className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
              <strong className='text-xl md:text-3xl'>Specifications</strong>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Battery</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.8 Kwh</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Max range (@30km/h)</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">100 km</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Motor</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1500W</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Charging time</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3 hours (12A)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Battery warranty</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3 Years</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Max speed</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">50 km/h</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Max range (@full speed)</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">70 km</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Max range (@45km/h)</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">90 km</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Other key benefits</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Fire-safe battery<br />
              Range prediction<br />
              Comfortable ride and safe
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">Battery features</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              LFP with 1500 cycles<br />
              Active Balancing<br />
              Waterproof (IP67)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
