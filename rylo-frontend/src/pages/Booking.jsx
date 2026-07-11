import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

export default function Booking() {
  const { id } = useParams();

  const [selectedService, setSelectedService] = useState(null);

const [formData, setFormData] = useState({
    customer_name: "",
    mobile: "",
    whatsapp: "",
    email: "",

    service_id: "",
    title: "",
    working_category: "",
    working_time: "",
    price: "",

    date: "",
    time: "",
    duration: "",
    location: "",
    notes: "",
});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `https://api.rylosupport.in/api/services/${id}`
        );

    setSelectedService(response.data);

setFormData((prev) => ({
    ...prev,
    service_id: response.data.id,
    title: response.data.title,
    working_category: response.data.working_category,
    working_time: response.data.working_time,
    price: response.data.price,
}));
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.rylosupport.in/api/bookings",
        formData
      );

      alert("Booking Submitted Successfully");

      console.log(response.data);

    setFormData({
    customer_name: "",
    mobile: "",
    whatsapp: "",
    email: "",

    service_id: selectedService?.id || "",
    title: selectedService?.title || "",
    working_category: selectedService?.working_category || "",
    working_time: selectedService?.working_time || "",
    price: selectedService?.price || "",

    date: "",
    time: "",
    duration: "",
    location: "",
    notes: "",
});
    } catch (error) {
      console.error(error);

      if (error.response?.data?.errors) {
        alert(Object.values(error.response.data.errors).join("\n"));
      } else {
        alert("Booking Failed");
      }
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Book a Service</h1>
          <p className="mt-3">Home / Book a Service</p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-4 gap-8">

            {/* Booking Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow p-8">

              <h2 className="text-3xl font-bold mb-2">
                Book Your Service
              </h2>

              <p className="text-gray-500 mb-8">
                Fill in the details below and we will confirm your booking shortly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Name */}
                <div>
                  <label className="font-semibold block mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="font-semibold block mb-2">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="font-semibold block mb-2">
                    WhatsApp Number
                  </label>

                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-semibold block mb-2">
                    Email (Optional)
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="font-semibold block mb-2">
                    Service
                  </label>

                  <input
                    type="text"
                    value={selectedService?.title || ""}
                    readOnly
                    className="w-full border rounded-lg p-3 bg-gray-100"
                  />
                </div>


{/* Working Category */}
<div>
  <label className="font-semibold block mb-2">
    Working Category
  </label>

  <input
    type="text"
    value={formData.working_category || ""}
    readOnly
    className="w-full border rounded-lg p-3 bg-gray-100"
  />
</div>

{/* Working Time */}
<div>
  <label className="font-semibold block mb-2">
    Working Time
  </label>

  <input
    type="text"
    value={formData.working_time || ""}
    readOnly
    className="w-full border rounded-lg p-3 bg-gray-100"
  />
</div>

{/* Service Price */}
<div>
  <label className="font-semibold block mb-2">
    Service Price
  </label>

  <input
    type="text"
    value={formData.price ? `₹${formData.price}` : ""}
    readOnly
    className="w-full border rounded-lg p-3 bg-gray-100"
  />
</div>

                {/* Date */}
                <div>
                  <label className="font-semibold block mb-2">
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="font-semibold block mb-2">
                    Time
                  </label>

                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="font-semibold block mb-2">
                    Duration
                  </label>

                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg p-3"
                  >
                    <option value="">Select Duration</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>

                {/* Location */}
                <div className="md:col-span-2">
                  <label className="font-semibold block mb-2">
                    Service Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {/* Notes */}
                <div className="md:col-span-2">
                  <label className="font-semibold block mb-2">
                    Additional Notes
                  </label>

                  <textarea
                    rows="5"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
                  >
                    Submit Booking
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-bold text-xl mb-6">
                  Why Choose RYLO?
                </h3>

                <div className="space-y-4">

                  <div className="flex gap-3 items-center">
                    <FaCheckCircle className="text-purple-700" />
                    Verified Professionals
                  </div>

                  <div className="flex gap-3 items-center">
                    <FaCheckCircle className="text-purple-700" />
                    Affordable Pricing
                  </div>

                  <div className="flex gap-3 items-center">
                    <FaCheckCircle className="text-purple-700" />
                    On-Time Service
                  </div>

                  <div className="flex gap-3 items-center">
                    <FaCheckCircle className="text-purple-700" />
                    24/7 Support
                  </div>

                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-2xl text-white p-6">

                <h3 className="font-bold text-2xl mb-6">
                  Need Help?
                </h3>

                <p className="mb-8">
                  We are here to help you.
                </p>

                <a
                  href="tel:+917994573013"
                  className="flex items-center gap-3 border border-white rounded-xl p-4 mb-4"
                >
                  <FaPhoneAlt />
                  +91 79945 73013
                </a>

                <a
                  href="https://wa.me/917994573013"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-white text-purple-700 rounded-xl p-4 font-semibold"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}