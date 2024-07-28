import React from 'react'

const Rentals = () => {
  return (
    <div className='flex justify-center items-center p-5 w-full bg-custom-gradient min-h-screen'>
    <div className='w-3/4'>
      <p className='font-calibri text-center text-white-100'>
        Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
        <br /><br />
        Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
        <br /><br />
        Download our rental app : 
       <button className=' bg-yellow-50 p-1 rounded-md mx-2 active:scale-95'>
          <a href="https://play.google.com" className='text-zinc-950 transition-colors duration-300 mx-2'>
              Android
          </a>
       </button>
        |
        <button className=' bg-yellow-50 p-1 rounded-md mx-2 active:scale-95'>
        <a href="https://www.apple.com/app-store/" className='text-zinc-950 transition-colors duration-300 mx-2'>
          Apple
        </a>
        </button>
      </p>
    </div>
  </div>
  )
}

export default Rentals