import React from 'react'

const features = [
    { title: "Transport", icon: "🚐", description: "We provide reliable and respectful transport services for the deceased." },
    { title: "Casket", icon: "⚰️", description: "Choose from a variety of high-quality caskets to honor your loved one." },
    { title: "Lowering Gear", icon: "⚙️", description: "Our lowering gear ensures a dignified and smooth burial process." },
    { title: "Gazebo", icon: "⛺", description: "We offer gazebo setups for outdoor services and gatherings." },
    { title: "Red/Green Carpet", icon: "🟥🟩", description: "Red and green carpets are available to enhance the service setting." },
]
const FeatureSection = () => {
  return (
    <section id='services' className='py-16 bg-gray-100'>
        <h2 className='text-center text-3xl font-bold text-gray-900 mb-10'>Our Services</h2>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
            {features.map((feature, index)=>(
                <div key={index} className='bg-white p-6 shadow-lg rounded-lg text-center'>
                  <div className='text-5xl mb-4'>{feature.icon}</div>
                  <h3 className='text-xl font-semibold mb-2 text-gray-700'>{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
            ))}

        </div>

    </section>
  )
}

export default FeatureSection