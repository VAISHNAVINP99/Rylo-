import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaClock, FaShieldAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";

export default function ServiceDetails() {

    const { slug } = useParams();

    const [service, setService] = useState(null);

    useEffect(() => {
        fetchService();
    }, []);

    const fetchService = async () => {
        try {
            const res = await axios.get(
                `http://127.0.0.1:8000/api/services/${slug}`
            );

            setService(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    if (!service) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-xl font-semibold text-gray-500">
                    Loading Service...
                </h2>
            </div>
        );
    }

    return (
<>

<Navbar/>
        <section className="bg-gradient-to-b from-white via-purple-50 to-white py-16 md:py-24">

            <div className="max-w-7xl mx-auto px-5">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Image */}

                    <div className="relative">

                        <div className="absolute -top-5 -left-5 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20"></div>

                        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">

                            <img
                                src={`http://127.0.0.1:8000/storage/${service.image}`}
                                alt={service.title}
                                className="w-full h-[300px] sm:h-[450px] object-cover"
                            />

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <span className="inline-block px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-5">
                            Premium Support Service
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">

                            {service.title}

                        </h1>

                        <p className="mt-7 text-gray-600 leading-8 text-lg">

                            {service.description}

                        </p>

                        {/* Price */}

                        <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 border border-purple-100">

                            <h3 className="text-gray-500 uppercase tracking-wide text-sm">
                                Starting Price
                            </h3>

                            <h2 className="text-5xl font-bold text-purple-700 mt-2">
                                ₹{service.price}
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Minimum Booking: 5 Hours
                            </p>

                        </div>

                        {/* Features */}

                        <div className="grid sm:grid-cols-2 gap-4 mt-8">

                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow">

                                <FaCheckCircle className="text-green-600 text-xl" />

                                <span>Verified Professionals</span>

                            </div>

                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow">

                                <FaClock className="text-purple-700 text-xl" />

                                <span>Flexible Booking</span>

                            </div>

                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow">

                                <FaShieldAlt className="text-blue-600 text-xl" />

                                <span>Trusted Service</span>

                            </div>

                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow">

                                <FaCheckCircle className="text-green-600 text-xl" />

                                <span>Affordable Pricing</span>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="flex flex-col sm:flex-row gap-5 mt-10">

                            <Link
                                to="/book-now"
                                className="flex-1 text-center bg-gradient-to-r from-purple-700 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg"
                            >
                                Book Now
                            </Link>

                            <Link
                                to="/services"
                                className="flex-1 text-center border-2 border-purple-700 text-purple-700 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 hover:text-white transition duration-300"
                            >
                                Back to Services
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
        
  <Footer />
      <WhatsAppButton/>
    </>
    );


}