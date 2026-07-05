import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await axios.get(
                "http://127.0.0.1:8000/api/services"
            );

            setServices(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-semibold uppercase text-sm tracking-wider">
                        Our Services
                    </span>

                    <h2 className="mt-5 text-4xl md:text-5xl font-extrabold">

                        <span className="bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                            Professional Support Services
                        </span>

                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
                        Choose from our trusted support services designed
                        to provide comfort, safety and reliability.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

                    {services.map((service) => (

                        <div
                            key={service.id}
                            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden flex flex-col"
                        >

                            {/* Image */}

                            <div className="overflow-hidden h-60">

                <img
    src={`http://127.0.0.1:8000/storage/${service.image}`}
                                alt={service.title}
    alt={service.title}
    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
/>


                            </div>

                            {/* Content */}

                            <div className="p-7 flex flex-col flex-grow">

                                <h3 className="text-2xl font-bold text-gray-800">

                                    {service.title}

                                </h3>

                                <p className="text-gray-600 leading-7 mt-4 flex-grow">

                                    {service.description}

                                </p>

                                <div className="mt-6">

                                    <span className="text-3xl font-bold text-purple-700">
                                        ₹{service.price}
                                    </span>

                                    <p className="text-gray-500 text-sm mt-2">
                                        Minimum Booking: 5 Hours
                                    </p>

                                </div>

                                {/* Buttons */}

                                <div className="mt-8 space-y-3">

                                  <Link
    to={`/service/${service.slug}`}
    className="block text-center bg-gradient-to-r from-purple-700 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-purple-800 hover:to-blue-800 transition"
>
    View Details
</Link>

                                    <Link
                                        to="/book-now"
                                        className="block text-center border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white py-3 rounded-xl font-semibold transition"
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
    );
}