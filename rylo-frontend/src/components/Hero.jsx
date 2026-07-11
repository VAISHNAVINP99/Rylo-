import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHeroes();
    }, []);

    const fetchHeroes = async () => {
        try {
            const res = await axios.get("https://api.rylosupport.in/api/hero");

            console.log("Hero API:", res.data);

            setHeroes(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[600px]">
                Loading...
            </div>
        );
    }

    if (heroes.length === 0) {
        return (
            <div className="text-center py-20">
                No Hero Data Found
            </div>
        );
    }

    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            loop={heroes.length > 1}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation
        >
            {heroes.map((hero) => (
                <SwiperSlide key={hero.id}>
                    <section className="bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden min-h-[650px] flex items-center">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">

                                <div className="text-center lg:text-left">

                                    <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-semibold text-sm uppercase">
                                        {hero.welcome_text}
                                    </span>

                                    <h1 className="mt-6 text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                                        {hero.title}
                                    </h1>

                                    <h2 className="mt-4 text-2xl font-semibold text-gray-700">
                                        {hero.subtitle}
                                    </h2>

                                    <p className="mt-6 text-gray-600">
                                        {hero.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 mt-10">

                                        <Link
                                            to={hero.button1_link}
                                            className="bg-purple-700 text-white px-8 py-4 rounded-xl hover:bg-purple-800"
                                        >
                                            {hero.button1_text}
                                        </Link>

                                        <a
                                            href={hero.button2_link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="border-2 border-purple-700 px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-purple-700 hover:text-white"
                                        >
                                            <FaWhatsapp />
                                            {hero.button2_text}
                                        </a>

                                    </div>

                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src={`https://api.rylosupport.in/storage/${hero.image}`}
                                        alt={hero.title}
                                        className="max-w-lg w-full object-contain"
                                        onError={(e) => {
                                            e.target.src = "/placeholder.png";
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}