import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div className="bg-custom-gradient min-h-screen flex flex-col">
      <Navbar />
     
        <div >
            
            <div className='p-4'  >
                <h1 className='font-bold left-4 text-3xl text-white-200 font-lato mb-4'>Rhyno EV</h1>
                <p className='font-calibri'>
  <span className="text-red-400">Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions,</span> 
  <span className="text-blue-400"> Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry.</span> 
  <span className="text-green-400"> We believe in engineering solutions that solve problems. With our first product, we've taken a bold step to create something more than just a vehicle;</span> 
  <span className="text-yellow-400"> it's a unique experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters.</span> 
  <span className="text-purple-400"> Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology.</span> 
  <span className="text-pink-400"> Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability.</span> 
  <span className="text-teal-400"> Join us as we pioneer a new era in sustainable and dependable electric transportation.</span>
</p>

            </div>

            <div>
                <img src='/grp.png'/>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs