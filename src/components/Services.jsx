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
    <section id='services' className='py-16 bg-gray-100'>
      <h2 className='text-center text-3xl font-bold text-gray-900 mb-10'>Our Services</h2>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>

      </div>

    </section>
  )
}

export default Services