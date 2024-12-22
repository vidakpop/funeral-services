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
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
            {pricing.map((price, index)=>(
                <div key={index} className='bg-white text-gray-900 p-6 shadow-lg rounded-lg'>
                    <h3 className='text-xl font-semibold mb-2'>{price.service}</h3>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Pricing