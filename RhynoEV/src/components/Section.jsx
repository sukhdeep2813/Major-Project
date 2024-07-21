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
    })
  return (
    <section className='bg-slate-950 w-full'>
         <div className=' h-96 '>
            <h1 className='justify-center text-center text-white text-3xl'>
                <p className='pt-40 h1rhyno '  id='h1'>
                  Let's Elevate Your Ride Experience With Rhyno– 
                <br/>Where Superiority Meets Style.
                </p>
            </h1>
        </div>
    </section>
  )
}

export default Section