import React from 'react'
import Carousel from './Carousel'
import Footer from "./Footer"

const Material = () => {
  const images = [
    '/rhyno final.95.png',
    '/black.png'
    
  ];
  const images2 = [
     "/final design try 2 cross view.178.png",
     "/golden.png"
  ];
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full text-center '>
         <h1 className='text-center text-sm  md:text-md lg:text-3xl font-lato font-bold' >
            Transforming India's New Face<span className='text-purple-900 font-bold font-lato'>
             <br/>with Rhyno EV
            </span>
        </h1>


      </div>

      <div className=' w-11/12'>
         <img src='/grp.png' className='gp rounded-3xl' alt="Group"/>
      </div>


       <div className='mx-16 my-8 flex-col  w-11/12 flex md:flex-row  '>
          <div className='tyre bg-slate-950 rounded-md mx-2 my-2'><Carousel images={images} interval={3000}/></div>
          <div className='speed rounded-md bg-slate-950 mx-2 my-2'><Carousel images={images2} interval={4000}/></div>
       </div>
       
       <div className='bg-custom-gradient w-11/12 p-3 rounded-md font-calibri md:flex md:align-baseline md:space-x-20 mb-8 md:justify-center pb-20'>
        <div className=' flex-col flex items-center justify-center '>
           <img className=' h-10 w-10 mt-8 ' src='/energy.png' alt="Energy" />
            <h2 className='mt-2 font-bold text-center text-zinc-950'>Made In India</h2>
            <p className='text-gray-600 text-center'>For Indians By Indians</p>
        </div>

        <div className='flex-col flex items-center justify-center '>
            <img className=' h-10 w-10 mt-8' src='/electric-scooter.png' alt="Electric Scooter" />
            <h2 className='mt-2 font-bold text-center text-zinc-950'>Long Riding Range</h2>
            <p className='mt-2 text-gray-600'>Range that's true to your riding style</p>
          </div>

          <div className='flex-col flex items-center justify-center'>
            <img className=' h-10 w-10 mt-8' src='/reuse.png' alt="Reuse" />
            <h2 className='mt-2 font-bold text-center text-zinc-950'>Removable Battery</h2>
            <p className='mt-2 text-gray-600'>Charge At Your Convenience, Wherever!</p>
          </div>
          <div className='flex-col flex items-center justify-center'>
            <img className='h-10 w-10 mt-8' src='/phone-charger.png ' alt="Phone Charger" />
            <h2 className='mt-2 font-bold text-center text-zinc-950'>Lightest Charger</h2>
            <p className='mt-2 text-gray-600'>No more Carrying Bulky Chargers</p>
          </div>

       </div>

       <Footer/>
    </div>
  )
}

export default Material