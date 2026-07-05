import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import WhatsAppButton from "../components/WhatsAppButton";

export default function About() {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        fetchAbout();
    }, []);

    const fetchAbout = async () => {
        try {
            const res = await axios.get(
                "http://127.0.0.1:8000/api/about"
            );

            setAbout(res.data.about);
        } catch (error) {
            console.log(error);
        }
    };

    if (!about) {
        return (
            <div className="py-40 text-center text-2xl font-semibold">
                Loading...
            </div>
        );
    }

    return (
        <>

        <Navbar />
            {/* Hero */}
            <section className="bg-gradient-to-r from-purple-800 via-purple-700 to-blue-700 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        {about.hero_title}
                    </h1>

                    <p className="mt-6 text-lg text-purple-100 max-w-3xl mx-auto leading-8">
                        {about.hero_subtitle}
                    </p>

                </div>
            </section>

            {/* About */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Image */}

                        <div className="relative">

                            <div className="absolute -top-5 -left-5 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl"></div>

                          <img
    src={`http://127.0.0.1:8000/storage/${about.image}`}
    alt={about.company_name}

                                className="relative rounded-3xl shadow-2xl w-full object-cover z-10"
                            />

                        </div>

                        {/* Content */}

                        <div>

                            <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-semibold uppercase">
                                {about.who_we_are_title}
                            </span>

                            <h2 className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                                {about.company_name}
                            </h2>

                            <div
                                className="mt-8 text-gray-600 leading-8"
                                dangerouslySetInnerHTML={{
                                    __html: about.description_one,
                                }}
                            />

                            <div
                                className="mt-6 text-gray-600 leading-8"
                                dangerouslySetInnerHTML={{
                                    __html: about.description_two,
                                }}
                            />

                        </div>

                    </div>

                </div>
            </section>

            {/* Mission & Vision */}

            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center">

                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                            Mission & Vision
                        </h2>

                        <p className="mt-5 text-gray-600">
                            Our purpose and future direction.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-10 mt-16">

                        <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition duration-300">

                            <h3 className="text-3xl font-bold text-purple-700 mb-6">
                                Our Mission
                            </h3>

                            <div
                                className="leading-8 text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: about.mission,
                                }}
                            />

                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition duration-300">

                            <h3 className="text-3xl font-bold text-blue-700 mb-6">
                                Our Vision
                            </h3>

                            <div
                                className="leading-8 text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: about.vision,
                                }}
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* Why Choose */}

            <WhyChoose />

            {/* CTA */}

            <section className="py-24">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="rounded-3xl bg-gradient-to-r from-purple-700 via-purple-800 to-blue-700 text-white p-12 md:p-16 text-center shadow-2xl">

                        <h2 className="text-3xl md:text-5xl font-bold">
                            {about.cta_title}
                        </h2>

                        <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto text-purple-100">
                            {about.cta_description}
                        </p>

                        <a
                            href={`https://wa.me/${about.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-10 bg-white text-purple-700 px-10 py-4 rounded-xl font-bold hover:scale-105 transition duration-300 shadow-lg"
                        >
                            {about.cta_button}
                        </a>

                    </div>

                </div>

            </section>

            <Footer />
            <WhatsAppButton />
        </>
    );
}