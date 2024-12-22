import React from 'react'

const pricing=[
    { service: "Transport", price: "KES 10,000" },
    { service: "Casket", price: "KES 50,000" },
    { service: "Lowering Gear", price: "KES 15,000" },
    { service: "Gazebo", price: "KES 20,000" },
    { service: "Red/Green Carpet", price: "KES 5,000" },
]
const Pricing = () => {
  return (
    <section id='pricing' className='py-16 bg-gradient-to-r from-purple-700 to-blue-700 text-white'>
        <h2 className='text-center text-3xl font-bold mb-10'>Pricing</h2>

    </section>
  )
}

export default Pricing