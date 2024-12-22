import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative h-screen'>
        <video className='absolute inset-0 w-full h-full object-cover'
        src="/assets/hero.mp4" 
        autoPlay muted loop
        >

        </video>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center'>
           
        </div>     
    </div>
  )
}

export default HeroSection