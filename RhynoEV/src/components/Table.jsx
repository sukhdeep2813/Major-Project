import React from 'react'

const   Table = () => {
  return (
   <div className='w-full'>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td colSpan="2"><strong>Warranty on Electronics</strong></td>
        </tr>
        <tr >
          <td className = "p-4 font-bold">Battery</td>
          <td className='p-4'>1.8 Kwh</td>
        </tr>
        <tr>
          <td className = "p-4 font-bold">Max range (@30km/h)</td>
          <td className = "p-4">100 km</td>
        </tr>
        <tr>
          <td className = "p-4 font-bold">Motor</td>
          <td className = "p-4">1500W</td>
        </tr>
        <tr>
          <td className = "p-4 font-bold">Charging time</td>
          <td className = "p-4">3 hours (12A)</td>
        </tr>
        <tr>
          <td className = "p-4 font-bold">Battery warranty</td>
          <td className = "p-4">3 Years</td>
        </tr>
        <tr>
          <td className = "p-4 font-bold">Max speed</td>
          <td className = "p-4">50 km/h</td>
        </tr>
        <tr>
          <td className = "p-4 font-bold">Max range (@full speed)</td>
          <td className = "p-4">70 km</td>
        </tr>
        <tr>
          <td className = "p-4 font-bold">Max range (@45km/h)</td>
          <td className = "p-4">90 km</td>
        </tr>
        <tr>
          <td className = "p-4 font-bold">Other key benefits</td>
          <td className = "p-4">
            Fire-safe battery<br />
            Range prediction<br />
            Comfortable ride and safe
          </td>
        </tr>
        <tr>
          <td className = "p-4 font-bold">Battery features</td>
          <td className = "p-4 ">
            LFP with 1500 cycles<br />
            Active Balancing<br />
            Waterproof (IP67)
          </td>
        </tr>
       
      </tbody>
    </table>
  

   </div>
  )
}

export default Table