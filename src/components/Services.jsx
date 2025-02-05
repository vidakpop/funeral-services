import React,{useEffect,useState} from 'react'

const Services = () => {
    const [services, setServices] = useState([])
    const API_URL="http://127.0.0.1:/api" //update during production
    useEffect(()=>{
        axios.get(API_URL)
            .then(response =>{
                setServices(response.data)
            })
            .catch(error => {
                console.error('Error fetching services:',error)
            })
    },[])
  return (
    <section id="services" className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map(service => (
          <div key={service.id} className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">{service.name}</h3>
            <div className="grid gap-4">
              {service.products.map(product => (
                <div key={product.id} className="bg-gray-50 p-4 rounded-lg shadow">
                  <img src={`http://127.0.0.1:8000/media/${product.image}`} alt={product.name} className="w-full h-32 object-cover rounded" />
                  <h4 className="text-lg font-bold mt-2">{product.name}</h4>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-green-700 font-bold">
                    {product.on_offer ? `KES ${product.offer_price} (Offer)` : `KES ${product.price}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services