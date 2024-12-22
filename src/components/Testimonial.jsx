import React from 'react'
const testimonials = [
    { name: "John Doe", message: "They made everything so easy during our hard time." },
    { name: "Jane Smith", message: "Exceptional service and care." },
    { name: "Robert K.", message: "Highly recommended!" },
  ];
const Testimonial = () => {
    
  return (
    <section id="testimonials" className="py-16 bg-gray-200">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">What Our Clients Say</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 italic">"{testimonial.message}"</p>
            <h4 className="text-gray-900 font-bold mt-4">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial