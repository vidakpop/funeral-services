import React, { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_SERVICES_URL = "https://dove.technologent.co.ke/api/services/";
  const API_PRODUCTS_URL = "https://dove.technologent.co.ke/api/products/";
  const MEDIA_URL = "https://dove.technologent.co.ke/media/products/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesResponse, productsResponse] = await Promise.all([
          axios.get(API_SERVICES_URL),
          axios.get(API_PRODUCTS_URL),
        ]);

        console.log("Services Response:", servicesResponse.data);
        console.log("Products Response:", productsResponse.data);

        const servicesData = servicesResponse.data;
        const productsData = productsResponse.data;

        // Match products to their respective services
        const updatedServices = servicesData.map(service => ({
          ...service,
          products: productsData.filter(product => product.service_id === service.id),
        }));

        setServices(updatedServices);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="services" className="py-16 bg-gradient-to-r from-purple-900 via-black to-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-purple-700 opacity-20 w-72 h-72 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute bg-blue-600 opacity-20 w-96 h-96 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
      </div>
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 uppercase tracking-widest">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Our Services
          </span>
        </h2>

      {loading ? (  
        <p className="text-center text-gray-500">Loading services...</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.length > 0 ? (
            services.map(service => (
              <div key={service.id} className="relative bg-gray-800 p-6 shadow-lg rounded-lg overflow-hidden transform transition-all duration-700 group">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">{service.name}</h3>

                {/* Check if service has products before mapping */}
                {service.products.length > 0 ? (
                  <div className="grid gap-4">
                    {service.products.map(product => (
                      <div key={product.id} className="bg-gray-50 p-4 rounded-lg shadow">
                        <img
                          src={product.image.startsWith("http") ? product.image : `${MEDIA_URL}${product.image}`}
                          alt={product.name}
                          className="w-full h-32 object-cover rounded"
                        />
                        <h4 className="text-lg font-bold mt-2">{product.name}</h4>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-green-700 font-bold">
                          {product.on_offer ? `KES ${product.offer_price} (Offer)` : `KES ${product.price}`}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No products available.</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No services found.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Services;
