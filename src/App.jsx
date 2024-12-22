import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Workflow from './components/Workflow'
import EncouragementPopup from './components/EncouragementPopup'
import Location from './components/Location'

function App () {
  return (
    <div className='bg-gray-50 text-gray-900'>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Pricing/>
      <Testimonial/>
      <Workflow />
      <EncouragementPopup/>
      <Location />
    </div>
  )
}

export default App