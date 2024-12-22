import React from 'react'


const Workflow = () => {
    const steps =[
        "Contact us to discuss your needs.",
        "Choose your preferred services.",
        "Receive confirmation and details.",
        "We handle the rest with care and professionalism.",
    ]
  return (
    <section id='workflow' className='py-16 bg-gradient-to-r from-blue-50 to-purple-50'>
       <h2 className='text-center text-3xl font-bold text-gray-900 mb-10'>How it works</h2>  
        <div className='container mx-auto flex flex-col items-cemter space-y-6 px-4'>
            {steps.map((step, index)=>(
                <div
                key={index}
                className="bg-white text-gray-900 p-6 shadow-lg rounded-lg w-full md:w-3/4 text-center"
              >
                <p className="text-lg font-semibold">{index + 1}. {step}</p>
              </div>
            ))}

        </div>

    </section>
  )
}

export default Workflow