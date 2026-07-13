import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    const [heroes, setHeroes] = useState([]);
    const [current, setCurrent] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        fetchHeroes();
    }, []);

    const fetchHeroes = async () => {
        try {
            const res = await axios.get(
                "https://api.rylosupport.in/api/hero"
            );

            setHeroes(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    // Auto Slider
    useEffect(() => {
        if (heroes.length <= 1) return;

        const interval = setInterval(() => {
            setAnimate(false);

            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % heroes.length);
                setAnimate(true);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroes]);

    if (!heroes.length) return null;

    const hero = heroes[current];

    return (
        <section className="bg-gradient-to-br from-white via-purple-50 to-blue-50 min-h-[650px] flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <div
                        key={`content-${current}`}
                        className={`transition-all duration-700 ${
                            animate
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-20 opacity-0"
                        }`}
                    >
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

                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link
                                to={hero.button1_link}
                                className="bg-purple-700 text-white px-8 py-4 rounded-xl hover:bg-purple-800 transition"
                            >
                                {hero.button1_text}
                            </Link>

                            <a
                                href={hero.button2_link}
                                target="_blank"
                                rel="noreferrer"
                                className="border-2 border-purple-700 text-purple-700 px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-purple-700 hover:text-white transition"
                            >
                                <FaWhatsapp />
                                {hero.button2_text}
                            </a>
                        </div>
                    </div>

                                        {/* Image */}
                    <div
                        key={`image-${current}`}
                        className={`flex justify-center transition-all duration-700 ${
                            animate
                                ? "translate-x-0 opacity-100"
                                : "translate-x-20 opacity-0"
                        }`}
                    >
                        <img
                            key={current}
                            src={`https://api.rylosupport.in/storage/${hero.image}`}
                            alt={hero.title}
                            className="max-w-lg w-full object-cover rounded-3xl shadow-2xl"
                            loading="eager"
                            decoding="async"
                            onError={(e) => {
                                e.target.src = "/placeholder.png";
                            }}
                        />
                    </div>

                </div>

                {/* Slider Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {heroes.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setAnimate(false);

                                setTimeout(() => {
                                    setCurrent(index);
                                    setAnimate(true);
                                }, 300);
                            }}
                            className={`h-3 rounded-full transition-all duration-300 ${
                                current === index
                                    ? "w-8 bg-purple-700"
                                    : "w-3 bg-gray-300 hover:bg-purple-500"
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}