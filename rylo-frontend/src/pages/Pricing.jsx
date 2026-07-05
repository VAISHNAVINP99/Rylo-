import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaClock,
  FaCalendarDay,
  FaCalendarWeek,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Pricing() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/pricing");
      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar />
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-800 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold">
            Simple & Transparent Pricing
          </h1>

          <p className="mt-6 text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-8">
            Affordable pricing with no hidden charges.
            Choose the service that best fits your needs.
          </p>

        </div>
      </section>

      {/* Minimum Booking */}
      <section className="bg-amber-50 py-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg border-l-8 border-amber-500 p-8">

            <h2 className="text-2xl font-bold text-amber-700">
              Minimum Booking Policy
            </h2>

            <p className="mt-3 text-gray-600 leading-8">
              Minimum booking duration is <strong>5 Hours</strong>.
              Even if the service is used for less than 5 hours,
              the minimum charge will be calculated for 5 hours.
            </p>

          </div>

        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50 to-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
              Our Pricing Plans
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
              Professional support services at competitive prices.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            {services.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-purple-100"
              >

                {/* Header */}

                <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-8 text-center">

                  <h2 className="text-3xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-purple-100">
                    {item.description}
                  </p>

                </div>

                {/* Prices */}

                <div className="p-8">

                  <div className="grid grid-cols-3 gap-4 text-center">

                    <div className="bg-purple-50 rounded-2xl p-4">

                      <FaClock className="mx-auto text-purple-700 text-xl" />

                      <p className="text-sm mt-2 text-gray-500">
                        Hourly
                      </p>

                      <h3 className="font-bold text-xl text-purple-700 mt-1">
                        ₹{item.hourly_price}
                      </h3>

                    </div>

                    <div className="bg-blue-50 rounded-2xl p-4">

                      <FaCalendarDay className="mx-auto text-blue-700 text-xl" />

                      <p className="text-sm mt-2 text-gray-500">
                        Daily
                      </p>

                      <h3 className="font-bold text-xl text-blue-700 mt-1">
                        ₹{item.daily_price}
                      </h3>

                    </div>

                    <div className="bg-green-50 rounded-2xl p-4">

                      <FaCalendarWeek className="mx-auto text-green-700 text-xl" />

                      <p className="text-sm mt-2 text-gray-500">
                        Weekly
                      </p>

                      <h3 className="font-bold text-xl text-green-700 mt-1">
                        ₹{item.weekly_price}
                      </h3>

                    </div>

                  </div>

                  {/* Features */}

                  <div className="mt-8">

                    <h3 className="font-bold text-xl mb-5">
                      Features
                    </h3>

                    <ul className="space-y-4">

                      {item.feature1 && (
                        <li className="flex items-center gap-3">
                          <FaCheckCircle className="text-green-500" />
                          {item.feature1}
                        </li>
                      )}

                      {item.feature2 && (
                        <li className="flex items-center gap-3">
                          <FaCheckCircle className="text-green-500" />
                          {item.feature2}
                        </li>
                      )}

                      {item.feature3 && (
                        <li className="flex items-center gap-3">
                          <FaCheckCircle className="text-green-500" />
                          {item.feature3}
                        </li>
                      )}

                      {item.feature4 && (
                        <li className="flex items-center gap-3">
                          <FaCheckCircle className="text-green-500" />
                          {item.feature4}
                        </li>
                      )}

                    </ul>

                  </div>

                  {/* Button */}

                  <Link
                    to="/book-now"
                    className="mt-10 block text-center bg-gradient-to-r from-purple-700 to-blue-700 text-white py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
                  >
                    Book Now
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Table */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-6">

              <h2 className="text-center text-3xl font-bold">
                Pricing Overview
              </h2>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="bg-purple-100">

                    <th className="py-4 px-6 ">
                      Service
                    </th>

                    <th className="py-4 px-6">
                      Hourly
                    </th>

                    <th className="py-4 px-6">
                      Daily
                    </th>

                    <th className="py-4 px-6">
                      Weekly
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {services.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b hover:bg-purple-50"
                    >

                      <td className="py-5 px-6 font-semibold">
                        {item.title}
                      </td>

                      <td className="text-center">
                        ₹{item.hourly_price}
                      </td>

                      <td className="text-center">
                        ₹{item.daily_price}
                      </td>

                      <td className="text-center">
                        ₹{item.weekly_price}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-xl">

            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Book Our Service?
            </h2>

            <p className="mt-6 text-lg text-purple-100 max-w-2xl mx-auto">
              Get professional support with affordable pricing.
              Book your preferred service today.
            </p>

            <Link
              to="/book-now"
              className="inline-block mt-10 bg-white text-purple-700 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Book Now
            </Link>

          </div>

        </div>

      </section>

      <Footer />

      <WhatsAppButton/>
    </>
  );
}