import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import {
  FaShieldAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  const [privacy, setPrivacy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.rylosupport.in/api/privacy-policy")
      .then((res) => {
        setPrivacy(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
    
        <section className="py-32 text-center">
          <h2 className="text-2xl font-semibold">
            Loading Privacy Policy...
          </h2>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>

      <Navbar/>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-800 via-purple-700 to-blue-700 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold">
            {privacy?.title}
          </h1>

          <p className="mt-4 text-lg text-purple-100">
            {privacy?.subtitle}
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 py-12 md:py-20">

        <div className="max-w-5xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12">

            <div className="text-center mb-12">

              <FaShieldAlt className="mx-auto text-purple-700 text-5xl mb-4" />

              <h2 className="text-3xl md:text-4xl font-bold">
                RYLO Support Services
              </h2>

              <p className="text-gray-500 mt-3">
                Reliable People. Reliable Support.
              </p>

            </div>

            <div className="space-y-12">

              {/* Information Collect */}

              <div>

                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  Information We Collect
                </h3>

                <div
                  className="text-gray-600 leading-8"
                  dangerouslySetInnerHTML={{
                    __html: privacy?.information_collect,
                  }}
                />

              </div>

              {/* Information Usage */}

              <div>

                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  How We Use Your Information
                </h3>

                <div
                  className="text-gray-600 leading-8"
                  dangerouslySetInnerHTML={{
                    __html: privacy?.information_usage,
                  }}
                />

              </div>

              {/* Data Protection */}

              <div>

                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  Data Protection
                </h3>

                <div
                  className="text-gray-600 leading-8"
                  dangerouslySetInnerHTML={{
                    __html: privacy?.data_protection,
                  }}
                />

              </div>

              {/* Third Party */}

              <div>

                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  Third-Party Disclosure
                </h3>

                <div
                  className="text-gray-600 leading-8"
                  dangerouslySetInnerHTML={{
                    __html: privacy?.third_party,
                  }}
                />

              </div>

              {/* Contact */}

              <div>

                <h3 className="text-2xl font-bold text-purple-700 mb-5">
                  Contact Us
                </h3>

                <div className="bg-purple-50 rounded-2xl p-6 space-y-4">

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-purple-700" />
                    <span>{privacy?.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-purple-700" />
                    <span>{privacy?.phone}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-purple-700 mt-1" />
                    <span>{privacy?.location}</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
      <WhatsAppButton/>
    </>
  );
}