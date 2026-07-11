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
        const res = await axios.get(
            "https://api.rylosupport.in/api/hero"
        );

        setHeroes(res.data);
        setLoading(false);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
};

if (loading) {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-[500px] bg-gray-200 rounded-3xl animate-pulse"></div>
            </div>
        </section>
    );
}

  

    return (
     <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    slidesPerView={1}
    loop={true}
    autoplay={{
        delay: 5000,
        disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    navigation
>
    {heroes.map((hero) => (
        <SwiperSlide key={hero.id}>
            <section className="bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}

                        <div className="order-2 lg:order-1 text-center lg:text-left">

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
                                    className="bg-purple-700 text-white px-8 py-4 rounded-xl"
                                >
                                    {hero.button1_text}
                                </Link>

                                <a
                                    href={hero.button2_link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="border-2 border-purple-700 px-8 py-4 rounded-xl flex items-center gap-2"
                                >
                                    <FaWhatsapp />
                                    {hero.button2_text}
                                </a>

                            </div>

                        </div>

                        {/* Right */}

                        <div className="order-1 lg:order-2 flex justify-center">

                            <img
                                src={`https://api.rylosupport.in/storage/${hero.image}`}
                                alt={hero.title}
                                className="max-w-lg w-full object-contain"
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