import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative h-screen'>
        <video className='absolute inset-0 w-full h-full object-cover'
        src="/assets/hero.mp4" 
        autoPlay muted loop
        >

        </video>

    </div>
  )
}

export default HeroSection