import React from 'react'
import Carousel from "./Carousel"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from 'react';
import Material from './Material';
import Navbar from './Navbar';

const Section = () => {
  const images = [
    '/bike.png',
    '/blue.png',
    '/black.png',
  ];

   useGSAP(() =>{
    gsap.to("h1", {
      opacity: 1,
      duration: 1.5,
      y:-50
    })
   });

   const slides = [
    {
      src: '/Copy of final design try 2 cross view.182.png',
      text: 'LFPBattery : Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno\'s longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn\'t stop there—our technology goes the extra mile in ensuring the battery\'s lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!',
    },
    {
      src: '/final design try 2 cross view.178.png',
      text: 'Wider tyres : Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand',
    },
    {
      src: '/final design try 2 side view.151.png',
      text: 'Range prediction: Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  return (
    <div>
      <Navbar/>
      <div className='bg-slate-950 section_height justify-center items-center flex-col'>
       
     <div>
       <h1 className='h1rhyno text-white-100 font-lato text-sm text-center md:text-md lg:text-2xl py-20' id='h1'> Let's Elevate Your Ride Experience With Rhyno– 
       <br />Where Superiority Meets Style.</h1>
       
     </div>

     <div className='w-full flex justify-center'>
       <div className='w-3/4'>
         <Carousel images={images} interval={3000}/>
       </div>
     </div>

     <div className=' w-full bg-slate-950 min-h-screen flex flex-col items-center'>
     <div className='w-full h-full flex flex-col md:flex-row justify-center items-center overflow-hidden'>
       {slides.map((slide, index) => (
         <div
           key={index}
           className={` transition-all duration-1000 ease-in-out ${
             index === currentIndex ? 'opacity-100' : 'opacity-0'
           }`}
         >
           <div className='flex justify-center items-center flex-col bg-custom-gradient relative h-full overflow-y-auto rounded-md mx-6 mt-10 '>
             <img src={slide.src} className='h-3/5 max-w-full object-contain' alt='Slide Image' />
             <p className='text-white-100 p-5 absolute text-xs sm:text-sm mt-10 w-4/5 md:text-xl '>{slide.text}</p>
           </div>  
         </div>
       ))}
     </div>
     <div className='flex justify-between items-center my-5 w-full px-10'>
       <button onClick={prevSlide} className='text-white bg-white-100 px-3 py-2 rounded'>Previous</button>
       <button onClick={nextSlide} className='text-white bg-white-100 px-3 py-2 rounded'>Next</button>
     </div>
   </div>  

   </div>
      <div className='mt-20'>
        <Material/>
      </div>
    </div>
  )
}
 
export default Section