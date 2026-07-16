import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Services() {
    const [services, setServices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

const servicesPerPage = 8;
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

    const totalPages = Math.ceil(services.length / servicesPerPage);

const currentServices = useMemo(() => {
    const start = (currentPage - 1) * servicesPerPage;
    return services.slice(start, start + servicesPerPage);
}, [services, currentPage]);

    if (!services.length) {
        return (
            <>
                <Navbar />

                <section className="py-20 bg-gray-100 min-h-screen">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="bg-white rounded-3xl shadow overflow-hidden"
                                >
                                    <div className="h-56 bg-gray-200 animate-pulse"></div>

                                    <div className="p-6 space-y-4">
                                        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </>
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

                       {currentServices.map((service) => (
                            <div
                                key={service.id}
                                 data-testid="service-card"
                                className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 ${
                                    animate
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-12"
                                }`}
                                style={{
                                    transitionDelay: `${service.id * 120}ms`,
                                }}
                            >
                                <img
                                data-testid="service-image"
                                    src={`https://api.rylosupport.in/storage/${service.image}`}
                                    alt={service.title}
                                    className="w-full h-56 object-cover"
                                />

                                <div className="p-6">

                                    <h3 className="text-2xl font-bold text-gray-800">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mt-3 line-clamp-3">
                                        {service.description}
                                    </p>

                                    <div className="mt-4">
                                        <span className="font-semibold">
                                            Category:
                                        </span>{" "}
                                        {service.working_category}
                                    </div>

                                    <div className="mt-2">
                                        <span className="font-semibold">
                                            Working Time:
                                        </span>{" "}
                                        {service.working_time}
                                    </div>

                                    <div className="mt-4">
                                        <span className="text-2xl font-bold text-purple-700">
                                            ₹{service.price}
                                        </span>
                                    </div>

                                    <div className="mt-6 flex flex-col gap-3">

                                    

      <Link
  to={`/booking/${service.id}`}
    data-testid="book-now"
  className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
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



            {/* Pagination */}

<div className="flex justify-center items-center mt-14 gap-2 flex-wrap">

    <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`px-5 py-2 rounded-lg font-semibold transition
            ${
                currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-purple-700 text-white hover:bg-purple-800"
            }`}
    >
        Previous
    </button>

    {[...Array(totalPages)].map((_, index) => (
        <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 rounded-lg font-semibold transition
                ${
                    currentPage === index + 1
                        ? "bg-purple-700 text-white"
                        : "bg-gray-200 hover:bg-purple-100"
                }`}
        >
            {index + 1}
        </button>
    ))}

    <button
        onClick={() =>
            setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
            )
        }
        disabled={currentPage === totalPages}
        className={`px-5 py-2 rounded-lg font-semibold transition
            ${
                currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-purple-700 text-white hover:bg-purple-800"
            }`}
    >
        Next
    </button>

</div>

            <Footer />
            <WhatsAppButton />
        </>
    );
}