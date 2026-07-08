import { useEffect, useState } from "react";
import axios from "axios";

export default function CTA() {

    const [cta, setCta] = useState(null);

    useEffect(() => {
        fetchCTA();
    }, []);

    const fetchCTA = async () => {
        try {

            const response = await axios.get(
                "https://api.rylosupport.in/api/cta"
            );

            setCta(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    if (!cta) {
        return null;
    }

    return (

        <section className="py-16">

            <div className="max-w-7xl mx-auto px-4">

                <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left">

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            {cta.title}
                        </h2>

                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">

                        <a
                            href={`tel:${cta.phone}`}
                            className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition text-center"
                        >
                            {cta.call_button}
                        </a>

                        <a
                            href={`https://wa.me/${cta.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition text-center"
                        >
                            {cta.whatsapp_button}
                        </a>

                    </div>

                </div>

            </div>

        </section>

    );
}