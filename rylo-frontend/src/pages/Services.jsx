import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "https://api.rylosupport.in/api/services"
      );

      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our Services
          </h1>

        
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
               <img
  src={`https://api.rylosupport.in/storage/${service.image}`}
  alt={service.title}
  className="w-full h-56 object-cover"
/>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {service.description}
                  </p>

                  <div className="mt-5">
                    <span className="text-purple-700 font-bold text-xl">
                      ₹{service.price}
                    </span>
                  </div>

                  <div className="mt-2 text-sm text-gray-500">
                    Minimum Booking: 5 Hours
                  </div>

                  <div className="mt-6 flex flex-col gap-3">

                    <Link
                      to={`/service/${service.slug}`}
                      className="block text-center bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800"
                    >
                      View Details
                    </Link>

                    <Link
                      to="/book-now"
                      className="border border-purple-700 text-purple-700 text-center py-3 rounded-xl hover:bg-purple-50"
                    >
                      Book Now
                    </Link>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
    <WhyChoose />

      <Footer />

      <WhatsAppButton />
    </>
  );
}