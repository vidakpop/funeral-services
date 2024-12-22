import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Workflow from './components/Workflow'

function App () {
  return (
    <div className='bg-gray-50 text-gray-900'>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Pricing/>
      <Testimonial/>
      <Workflow />
    </div>
  )
}

export default App