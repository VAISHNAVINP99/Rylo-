import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import {
  FaFileContract,
  FaCheckCircle,
} from "react-icons/fa";

export default function TermsConditions() {
  const [terms, setTerms] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.rylosupport.in/api/terms-conditions")
      .then((res) => {
        setTerms(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-800 via-purple-700 to-blue-700 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            {terms?.title || "Terms & Conditions"}
          </h1>

          <p className="mt-4 text-lg text-purple-100">
            {terms?.subtitle ||
              "Please read these terms carefully before using our services."}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12">

            {loading ? (
              <div className="text-center py-20 text-gray-500">
                Loading...
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <FaFileContract className="mx-auto text-purple-700 text-5xl mb-4" />

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {terms?.company_name || "RYLO Support Services"}
                  </h2>

                  <p className="text-gray-500 mt-3">
                    Reliable People. Reliable Support.
                  </p>
                </div>

                <div className="space-y-10">

                  {/* Service Booking */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">
                      Service Booking
                    </h3>

                    <div
                      className="text-gray-600 leading-8"
                      dangerouslySetInnerHTML={{
                        __html: terms?.service_booking || "",
                      }}
                    />
                  </div>

                  {/* Minimum Booking */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">
                      Minimum Booking Rule
                    </h3>

                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">

                      <h4 className="font-bold text-purple-700 text-lg">
                        Minimum Duty: 5 Hours
                      </h4>

                      <div
                        className="text-gray-600 leading-8 mt-3"
                        dangerouslySetInnerHTML={{
                          __html: terms?.minimum_booking || "",
                        }}
                      />

                    </div>
                  </div>

                  {/* Payments */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">
                      Payments
                    </h3>

                    <div
                      className="text-gray-600 leading-8"
                      dangerouslySetInnerHTML={{
                        __html: terms?.payments || "",
                      }}
                    />
                  </div>

                  {/* Cancellation */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">
                      Cancellation Policy
                    </h3>

                    <div
                      className="text-gray-600 leading-8"
                      dangerouslySetInnerHTML={{
                        __html: terms?.cancellation || "",
                      }}
                    />
                  </div>

                  {/* Customer Responsibilities */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">
                      Customer Responsibilities
                    </h3>

                    <div className="bg-gray-50 rounded-2xl p-6">

                      <div className="flex items-start gap-3 mb-3">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: terms?.responsibility_one || "",
                          }}
                        />
                      </div>

                      <div className="flex items-start gap-3 mb-3">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: terms?.responsibility_two || "",
                          }}
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: terms?.responsibility_three || "",
                          }}
                        />
                      </div>

                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">
                      Contact Information
                    </h3>

                    <div className="bg-purple-50 rounded-2xl p-6 space-y-2">

                      <p>
                        <strong>Email:</strong> {terms?.email}
                      </p>

                      <p>
                        <strong>Phone:</strong> {terms?.phone}
                      </p>

                      <p>
                        <strong>Location:</strong> {terms?.location}
                      </p>

                    </div>
                  </div>

                </div>
              </>
            )}

          </div>
        </div>
      </section>

      <Footer />
    
    </>
  );
}