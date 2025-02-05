import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Workflow from './components/Workflow'
import Services from  './components/Services'

import Location from './components/Location'
import Footer from './components/Footer'

function App () {
  return (
    <div className='bg-gray-50 text-gray-900'>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Services/>
      <Pricing/>
      <Workflow />
      <Testimonial/>
      <Location />
      <Footer />
    </div>
  )
}

export default App