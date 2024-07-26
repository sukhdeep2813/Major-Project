import React, { useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Material from './Material';
import Carousel from './Carousel';





const Section = () => {
  const images = [
    '/bike.png',
    '/blue.png',
    '/black.png',
  ];

  useGSAP(() => {
    gsap.to("#h1", {
      opacity: 1,
      duration: 1.5,
      y: -100
    });

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

    const cards = gsap.utils.toArray('.card');
    cards.forEach((card) => {
      gsap.fromTo(card, 
        {
          opacity: 0,
          y: 50,
          rotateY:-90
        }, 
        {
          opacity: 1,
          y:0,
          rotateY:0,
          duration: 2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Trigger animation when card is 80% from the top of the viewport
            toggleActions: "play none none none",
            once: true // Run the animation only once1` 
          }
        }
      );
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1, // Zoom out on hover
          duration: 0.5,
          ease: "power1.inOut"
        });
      });
    
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 0.8, // Return to original size when hover ends
          duration: 0.5,
          ease: "power1.inOut"
        });
      });
    });

  
  }, []);

  

  return (
    <>
    <section className='bg-slate-950 w-full justify-center'>
      <div className='h-auto'>
        <h1 className='justify-center text-center text-white text-3xl'>
          <p className='pt-40 h1rhyno' id='h1'>
            Let's Elevate Your Ride Experience With Rhyno– 
            <br />Where Superiority Meets Style.
          </p>
        </h1>
      
      <div className='flex justify-center items-center'>
        <div className='rounded-5xl w-2/4'>
          <Carousel images={images} interval={3000}/>
        </div>
      </div>

        <button className='prebook-button z-10'>
          Pre-book
        </button>

        <div className='flex flex-1'>
         
       
          <div className='m-9 flex justify-center items-center'>
            <div className='relative card hover:cursor-pointer'>
              <img
                src='/Copy of final design try 2 cross view.182.png'
                className='ml-5 w-full'
                alt='LFP Battery'
              />
              <div className='absolute bottom-11 left-0 p-4 bg-opacity-50 text-white w-full  '>
                <p className='text-sm'>
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
         
          <div className='m-6 flex justify-center items-center'>
            <div className='relative card  hover:cursor-pointer'>
              <img
                src='/final design try 2 cross view.178.png'
                className='ml-5 w-full'
                alt='LFP Battery'
              />
              <div className='absolute bottom-32 left-0 p-4 bg-opacity-50 text-white w-full'>
                <p className='text-sm '>
                Wider tyres : Now, say goodbye to skidding and embrace the leaning turns!
                Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
                beast that ensures stability on different terrains such as wet roads, mud, and sand
                </p>
              </div>
            </div>
          </div>
       
          <div className='m-9 flex justify-center items-center'>
            <div className='relative card  hover:cursor-pointer'>
              <img
                src='/final design try 2 side view.151.png'
                className='ml-5 w-full'
                alt='LFP Battery'
              />
              <div className='absolute bottom-28   left-0 p-4 bg-opacity-50 text-white w-full'>
                <p className='text-sm'>
                Range prediction: Many budget-friendly electric scooters overlook this crucial
                feature, causing riders to experience range anxiety. With Rhyno, you can ride with
                peace of mind, thanks to the scooter providing precise information about the
                remaining battery
                </p>
              </div>
            </div>
          </div>
     
        </div>
      </div>
    </section>




    
    <section className='h-full bg-white'>
          <Material/>
    </section>

    </>
  );
};

export default Section;
