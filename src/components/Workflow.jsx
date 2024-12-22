import React from 'react'
import { CheckCircle2 } from 'lucide-react'

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
       <div className='pt-12 w-full lg:w-1/2'>
                {steps.map((step,index)=>(
                    <div key={index} className='flex mb-12'>
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                            <CheckCircle2/>
                        </div>
                        <div>
                            <h5 className='mt-1 mb-2 text-xl'>{index + 1}. {step}</h5>
                            
                        </div>
                    </div>
                ))}
            </div>

    </section>
  )
}

export default Workflow