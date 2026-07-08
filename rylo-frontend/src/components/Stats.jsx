import { useEffect, useState } from "react";
import axios from "axios";

export default function Stats() {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {

            const response = await axios.get(
                "https://api.rylosupport.in/api/stats"
            );

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    return (

        <section className="py-16">

            <div className="max-w-7xl mx-auto px-4">

                <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-3xl p-8 md:p-12 text-white">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                        {stats.map((item) => (

                            <div key={item.id}>

                                <h3 className="text-3xl md:text-5xl font-bold">
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-sm md:text-lg">
                                    {item.title}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );
}