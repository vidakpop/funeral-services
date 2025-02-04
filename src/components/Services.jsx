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
    <div>Services</div>
  )
}

export default Services