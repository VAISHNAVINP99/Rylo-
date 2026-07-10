import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Services() {
  const [services, setServices] = useState([]);
const [animate, setAnimate] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

const fetchServices = async () => {
    try {
        const res = await axios.get(
            "https://api.rylosupport.in/api/services"
        );

        const data = res.data;

        const imagePromises = data.map((service) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = `https://api.rylosupport.in/storage/${service.image}`;

                img.onload = resolve;
                img.onerror = resolve;
            });
        });

        await Promise.all(imagePromises);

        setServices(data);

        setTimeout(() => {
            setAnimate(true);
        }, 100);

    } catch (error) {
        console.log(error);
    }
};

if (!services.length) {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="rounded-3xl bg-white shadow-lg overflow-hidden"
                        >
                            <div className="h-56 bg-gray-200 animate-pulse"></div>

                            <div className="p-6 space-y-4">
                                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


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
    className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 ease-out ${
        animate
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
    }`}
    style={{
        transitionDelay: `${service.id * 120}ms`,
    }}
>
  <img
    src={`https://api.rylosupport.in/storage/${service.image}`}
    alt={service.title}
    loading="lazy"
    decoding="async"
    className="w-full h-56 object-cover transition-transform duration-700 hover:scale-105"
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