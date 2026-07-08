import { useEffect, useState } from "react";
import axios from "axios";

import {
    FaUserCheck,
    FaAward,
    FaRupeeSign,
    FaCalendarAlt,
    FaHeadset,
} from "react-icons/fa";

export default function WhyChoose() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchWhyChoose();
    }, []);

    const fetchWhyChoose = async () => {
        try {
            const res = await axios.get(
                "https://api.rylosupport.in/api/why-choose"
            );
            setItems(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const iconMap = {
        FaUserCheck: <FaUserCheck />,
        FaAward: <FaAward />,
        FaRupeeSign: <FaRupeeSign />,
        FaCalendarAlt: <FaCalendarAlt />,
        FaHeadset: <FaHeadset />,
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Heading */}

                <div className="text-center mb-16">

                    <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                        Why Choose Us
                    </span>

                 

                    <p className="mt-6 text-gray-600 text-lg leading-8 max-w-3xl mx-auto">
                        We provide reliable, professional and affordable
                        support services tailored to your personal,
                        family and business needs.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                    {items.map((item) => (

                        <div
                            key={item.id}
                            className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-purple-100 flex flex-col"
                        >

                            {/* Icon */}

                            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-purple-700 to-blue-700 flex items-center justify-center text-white text-3xl shadow-lg group-hover:rotate-6 group-hover:scale-110 transition duration-500">

                                {iconMap[item.icon] || <FaAward />}

                            </div>

                            {/* Title */}

                            <h3 className="mt-7 text-xl font-bold text-gray-800">

                                {item.title}

                            </h3>

                            {/* Line */}

                            <div className="w-12 h-1 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full mx-auto mt-4 mb-5"></div>

                            {/* Description */}

                            <p className="text-gray-600 leading-7 text-sm flex-grow">

                                {item.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}