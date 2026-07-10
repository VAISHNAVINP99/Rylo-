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
const [imageLoaded, setImageLoaded] = useState(false);
const [animate, setAnimate] = useState(false);

    useEffect(() => {
        fetchService();
    }, []);

const fetchService = async () => {
    try {
        const res = await axios.get(
            `https://api.rylosupport.in/api/services/${slug}`
        );

        const img = new Image();
        img.src = `https://api.rylosupport.in/storage/${res.data.image}`;

        img.onload = () => {
            setService(res.data);
            setImageLoaded(true);

            setTimeout(() => {
                setAnimate(true);
            }, 100);
        };

        img.onerror = () => {
            setService(res.data);
            setImageLoaded(true);
            setAnimate(true);
        };

    } catch (error) {
        console.log(error);
    }
};

  if (!service || !imageLoaded) {
    return (
        <div className="max-w-7xl mx-auto px-5 py-20">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

                <div className="h-[450px] rounded-3xl bg-gray-200 animate-pulse"></div>

                <div className="space-y-5">
                    <div className="h-8 w-40 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-14 w-80 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-5 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-5 w-4/6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-28 bg-gray-200 rounded-2xl animate-pulse"></div>
                </div>

            </div>
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

                 <div
    className={`relative transition-all duration-1000 ease-out ${
        animate
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-x-24"
    }`}
>
    <div className="absolute -top-5 -left-5 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20"></div>

    <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">

        <img
            src={`https://api.rylosupport.in/storage/${service.image}`}
            alt={service.title}
            loading="eager"
            decoding="async"
            className="w-full h-[300px] sm:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
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
  {[
  service?.feature1,
  service?.feature2,
  service?.feature3,
  service?.feature4,
]
  .filter(Boolean)
  .map((feature, index) => (
    <div key={index}>
      <span>{feature}</span>
    </div>
  ))
}
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