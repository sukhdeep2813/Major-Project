import { Icon, Stack } from '@chakra-ui/react'
import React from 'react'

const Material = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-center w-full'>
        <h1 className='text-3xl mt-4 font-bold m-4 mb-12 text-center'>
          Transforming India's New Face
        </h1>
           </div>
            <div className= 'h-full w-4/5  mb-10 cursor-pointer' >
              <img src='/grp.png' className='gp rounded-3xl' />
            </div>
            
            <div className='flex
            flex-1 p-2 m-8 space-x-6 max-w-7xl'>
              <div><img src='/rhyno final.95.png' className='tyre rounded-lg bg-zinc-800'/></div>
              <div><img src='/black.png' className='speed rounded-lg bg-zinc-800'/></div>
            </div>

            <div className='flex flex-1 smallportion bg-gray-300 space-x-20 justify-center'>
              <div className=' flex-col  p-3'>
                <img className='ml-16 h-8 w-8' src='/energy.png' />
                <h1 className='mt-2 font-bold text-center'>Made In India</h1>
                <p className='mt-2 text-gray-600'>For Indians By Indians</p>
                
              </div>


              <div className='  flex-col  p-3'>
                <img className='ml-28 h-10 w-10' src='/electric-scooter.png' />
                <h1 className='mt-2 font-bold text-center'>Long Riding Range</h1>
                <p className='mt-2 text-gray-600'>Range that's true to your riding style</p>
                
              </div>


              <div className='flex-col  p-3'>
                <img className='ml-32 h-10 w-10' src='/reuse.png'/>
                <h1 className='mt-2 font-bold text-center'>Removable Battery</h1>
                <p className='mt-2 text-gray-600'>Charge At Your Convenience, Wherever !</p>
                
              </div>


              <div className='flex-col  p-3'>
                <img className='ml-28 h-10 w-10' src='/phone-charger.png'/>
                <h1 className='mt-2 font-bold text-center'>Lightest Charger</h1>
                <p className='mt-2 text-gray-600'>No more Carrying Bulky Chargers</p>
                
              </div>

            </div>

            <div className='flex flex-1 w-4/5 space-x-5 h-full'>
              <div></div>
              <div>
                


              </div>
            </div>
        </div>
    </div>
  )
}

export default Material