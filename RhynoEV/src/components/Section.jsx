import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import {useGSAP} from "@gsap/react"


const Section = () => {
  
    useGSAP(()=> {
        gsap.to("#h1", {
        opacity: 1,
        duration:1.5,
        y:-100
     })

     const images = gsap.utils.toArray('.carousel-image');
     gsap.to(images, {
       xPercent: -100 * (images.length - 1),
       ease: 'none',
       duration: 8,
       scrollTrigger: {
         trigger: '.carousel',
         pin: true,
         scrub: 1,
         end: `+=${window.innerWidth * images.length}`
       },
       repeat: -1 // This will make the animation repeat infinitely
     });
    },[]);
    const cardRef = useRef(null);
    useEffect(() => {
      // Initial animation on component mount
      gsap.fromTo(
        cardRef.current,
        { y: 100, opacity: 0, rotateY: -30, transformOrigin: 'right' },
        { y: 0, opacity: 1, rotateY: 0, duration: 1.5, ease: 'power4.out' }
      );
    }, []);
  

    
    
  return (
    <section className='bg-slate-950 w-full justify-center'>
         <div className='h-auto' >
            <h1 className='justify-center text-center text-white text-3xl'>
                <p className='pt-40 h1rhyno '  id='h1'>
                  Let's Elevate Your Ride Experience With Rhyno– 
                <br/>Where Superiority Meets Style.
                </p>
            </h1>
 
        <div className='carousel flex overflow-hidden relative mt-10 '>
          <img src='/bike.png' alt='Bike 1' className='carousel-image w-1/3 bike-image'  />
          <img src='/blue.png' alt='Bike 2' className='carousel-image w-1/3 bike-image' />
          <img src='/black.png' alt='Bike 3' className='carousel-image w-1/3 bike-image' />
        </div>

        <button className='prebook-button'>
          Pre-book
        </button>

        <div className='m-9 flex justify-center items-center'>
      <div
        ref={cardRef}
        className='relative card transform transition-transform duration-300 hover:transform hover:translate-x-2 hover:-rotate-y-3d'
      >
        <img
          src='/Copy of final design try 2 cross view.182.png'
          className='ml-5 w-full'
          alt='LFP Battery'
        />
        <div className='absolute bottom-4 left-0  p-4 bg-opacity-50 text-white w-full'>
          <p>
            LFPBattery : Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
            renowned for their safety features—eliminating the risk of fire associated with other
            Lithium batteries. These batteries boast a broader temperature range, ideal for the
            diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
            by an Active Balancing Smart Battery Management System (BMS) for extended life
            and reduced maintenance. Each battery undergoes rigorous waterproofing tests
            according to IP76 standards. But it doesn't stop there—our technology goes the extra
            mile in ensuring the battery's lasting durability. Connect with us to discover the
            thoughtful engineering behind our batteries!
          </p>
        </div>
      </div>
    </div>
             
           
      
        </div>

        
    </section>
  )
}

export default Section