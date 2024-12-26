import React from 'react'
import video1 from '../assets/hero.mp4'
const HeroSection = () => {
  return (
    <div className='relative h-screen'>
        <video className='absolute inset-0 w-full h-full object-cover'
        
        autoPlay muted loop
        >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.

        </video>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center'>
           <h1 className='text-4xl md:text-6xl font-extrabold mb-4'>Providing Comfort During
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-yellow-300'> Difficult Times</span>
           </h1>
           <p className='text-lg md:text-xl mb-6'>Premium services are here to ease the burden during your time of need.</p>
           <button className='bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition'>Book Our Services</button>
        </div>     
    </div>
  )
}

export default HeroSection