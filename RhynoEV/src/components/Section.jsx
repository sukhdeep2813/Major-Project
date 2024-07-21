import React from 'react'
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

    
    
  return (
    <section className='bg-slate-950 w-full items-center'>
         <div className='h-auto' >
            <h1 className='justify-center text-center text-white text-3xl'>
                <p className='pt-40 h1rhyno '  id='h1'>
                  Let's Elevate Your Ride Experience With Rhyno– 
                <br/>Where Superiority Meets Style.
                </p>
            </h1>
 
        <div className='carousel flex overflow-hidden relative mt-10'>
          <img src='/bike.png' alt='Bike 1' className='carousel-image w-1/3 bike-image' />
          <img src='/blue.png' alt='Bike 2' className='carousel-image w-1/3 bike-image' />
          <img src='/black.png' alt='Bike 3' className='carousel-image w-1/3 bike-image' />
        </div>

        <button className='prebook-button'>
          Pre-book
        </button>
        </div>

        
    </section>
  )
}

export default Section