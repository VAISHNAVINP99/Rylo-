import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    const [hero, setHero] = useState(null);

    useEffect(() => {
        fetchHero();
    }, []);

    const fetchHero = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/hero");
            setHero(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    if (!hero) return null;

    return (
        <section className="bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">

                        <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-semibold text-sm uppercase tracking-wider">
                            {hero.welcome_text}
                        </span>

                        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">

                            <span className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 bg-clip-text text-transparent">
                                {hero.title}
                            </span>

                        </h1>

                        <h2 className="mt-5 text-xl md:text-2xl font-semibold text-gray-700">
                            {hero.subtitle}
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                            {hero.description}
                        </p>

                        {/* Buttons */}

                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

                            <Link
                                to={hero.button1_link}
                                className="bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
                            >
                                {hero.button1_text}
                            </Link>

                            <a
                                href={hero.button2_link}
                                target="_blank"
                                rel="noreferrer"
                                className="border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition duration-300"
                            >
                                <FaWhatsapp className="text-xl" />
                                {hero.button2_text}
                            </a>

                        </div>

                        {/* Stats */}

                        <div className="grid grid-cols-3 gap-6 mt-14">

                            <div>

                                <h3 className="text-3xl lg:text-4xl font-bold text-purple-700">
                                    {hero.happy_clients}+
                                </h3>

                                <p className="text-gray-600 mt-2 text-sm">
                                    Happy Clients
                                </p>

                            </div>

                            <div>

                                <h3 className="text-3xl lg:text-4xl font-bold text-purple-700">
                                    {hero.support}
                                </h3>

                                <p className="text-gray-600 mt-2 text-sm">
                                    Customer Support
                                </p>

                            </div>

                            <div>

                                <h3 className="text-3xl lg:text-4xl font-bold text-purple-700">
                                    {hero.trusted_service}
                                </h3>

                                <p className="text-gray-600 mt-2 text-sm">
                                    Trusted Service
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Right Image */}

                    <div className="order-1 lg:order-2 flex justify-center">

                        <div className="relative">

                            {/* Background Shape */}

                            <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-blue-700 rounded-[60px] rotate-6 scale-105 shadow-2xl"></div>

                            {/* Image */}

                            <img
                                src={`https://api.rylosupport.in/storage/${hero.image}`}
                                alt={hero.title}
                                className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}