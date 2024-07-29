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
                <p className='font-calibri text-white-100'>
   Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions,
   Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry.
  We believe in engineering solutions that solve problems. With our first product, we've taken a bold step to create something more than just a vehicle;
 it's a unique experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters.
 Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology.
   Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability.
   Join us as we pioneer a new era in sustainable and dependable electric transportation.
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