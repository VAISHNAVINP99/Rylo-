import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";


import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [footerSettings, setFooterSettings] = useState(null);

  useEffect(() => {
  fetchFooterSettings();
}, []);

const fetchFooterSettings = async () => {
  try {
    const res = await axios.get(
      "https://api.rylosupport.in/api/footer-settings"
    );

    setFooterSettings(res.data);
  } catch (error) {
    console.error(error);
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(
        "https://api.rylosupport.in/api/contact-enquiries",
        formData
      );

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to Send Message");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-sm md:text-lg">
            We're here to help you anytime.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Contact Details */}
            <div>

              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-5">

                <div className="bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-lg transition">
                  <FaPhoneAlt className="text-purple-700 text-2xl" />

                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a
                      href={`tel:${footerSettings?.phone}`}
                      className="text-gray-600"
                    >
                     {footerSettings?.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-lg transition">
                  <FaWhatsapp className="text-green-500 text-2xl" />

                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>

                    <a
                      href={`https://wa.me/${footerSettings?.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600 font-medium"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-lg transition">
                  <FaEnvelope className="text-blue-600 text-2xl" />

                  <div>
                    <h4 className="font-semibold">Email</h4>

                    <a
                      href={`mailto:${footerSettings?.email}`}
                      className="text-gray-600"
                    >
                     {footerSettings?.email}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4 hover:shadow-lg transition">
                  <FaMapMarkerAlt className="text-red-500 text-2xl" />

                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-600">
                        {footerSettings?.address}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Send Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-white py-3 md:py-4 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Map */}
      <section className="pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our Location
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-xl h-[350px] md:h-[450px]">

           <iframe
  title="Location Map"
  src={`https://maps.google.com/maps?q=${encodeURIComponent(
    footerSettings?.address || ""
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-3xl p-6 md:p-12 text-center text-white">

            <h2 className="text-3xl md:text-5xl font-bold">
              Need Immediate Assistance?
            </h2>

            <p className="mt-4 text-sm md:text-lg">
              Contact us directly through WhatsApp.
            </p>

            <a
             href={`https://wa.me/${footerSettings?.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-white text-purple-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>
      </section>

      <Footer />

      <WhatsAppButton/>
    </>
  );
}