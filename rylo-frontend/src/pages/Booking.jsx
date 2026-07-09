
import { useState,useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

export default function Booking() {
  const [services, setServices] = useState([]);

const [formData, setFormData] = useState({
  customer_name: "",
  mobile: "",
  whatsapp: "",
  email: "",
  service_id: "",
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

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://api.rylosupport.in/api/bookings",
      formData
    );

    alert("Booking Submitted Successfully");

    console.log(response.data);

  } catch (error) {
    console.error(error);
    alert("Booking Failed");
  }
};



useEffect(() => {
    const fetchServices = async () => {
        try {
            const response = await axios.get(
                "https://api.rylosupport.in/api/services"
            );

            console.log(response.data);

           setServices(Array.isArray(response.data) ? response.data : response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchServices();
}, []);

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

            {/* Form */}
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
  {/* Full Name */}
  <div>
    <label className="font-medium">
      Full Name <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="customer_name"
      value={formData.customer_name}
      onChange={handleChange}
      placeholder="Enter your full name"
      className="w-full border rounded-lg p-3 mt-2"
      required
    />
  </div>

  {/* Mobile */}
  <div>
    <label className="font-medium">
      Mobile Number <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      placeholder="Enter your mobile number"
      className="w-full border rounded-lg p-3 mt-2"
      required
    />
  </div>

  {/* WhatsApp */}
  <div>
    <label className="font-medium">
      WhatsApp Number <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="whatsapp"
      value={formData.whatsapp}
      onChange={handleChange}
      placeholder="Enter WhatsApp number"
      className="w-full border rounded-lg p-3 mt-2"
      required
    />
  </div>

  {/* Email Optional */}
  <div>
    <label className="font-medium">
      Email Address
      <span className="text-gray-400 text-sm ml-1">
        (Optional)
      </span>
    </label>
    <input
      type="email"
      name="email"
      value={formData.email || ""}
      onChange={handleChange}
      placeholder="Enter your email address"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Service */}
  <div>
    <label className="font-medium">
      Select Service <span className="text-red-500">*</span>
    </label>
    <p>Total Services: {services.length}</p>
    <select
      name="service_id"
      value={formData.service_id}
      onChange={handleChange}
      className="w-full border rounded-lg p-3 mt-2"
      required
    >
      <option value="">Choose Service</option>
      {services.map((service) => (
        <option key={service.id} value={service.id}>
          {service.title}
        </option>
      ))}
    </select>
  </div>

  {/* Date */}
  <div>
    <label className="font-medium">
      Select Date <span className="text-red-500">*</span>
    </label>
    <input
      type="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      className="w-full border rounded-lg p-3 mt-2"
      required
    />
  </div>

  {/* Time */}
  <div>
    <label className="font-medium">
      Select Time <span className="text-red-500">*</span>
    </label>
    <input
      type="time"
      name="time"
      value={formData.time}
      onChange={handleChange}
      className="w-full border rounded-lg p-3 mt-2"
      required
    />
  </div>

  {/* Duration */}
  <div>
    <label className="font-medium">
      Duration <span className="text-red-500">*</span>
    </label>
    <select
      name="duration"
      value={formData.duration}
      onChange={handleChange}
      className="w-full border rounded-lg p-3 mt-2"
      required
    >
      <option value="">Select Duration</option>
      <option value="5">5 Hours</option>
      <option value="6">6 Hours</option>
      <option value="8">8 Hours</option>
      <option value="12">12 Hours</option>
      <option value="24">24 Hours</option>
    </select>
  </div>

  {/* Location */}
  <div className="md:col-span-2">
    <label className="font-medium">
      Service Location <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="location"
      value={formData.location}
      onChange={handleChange}
      placeholder="Enter service location"
      className="w-full border rounded-lg p-3 mt-2"
      required
    />
  </div>

  {/* Notes */}
  <div className="md:col-span-2">
    <label className="font-medium">
      Additional Notes
      <span className="text-gray-400 text-sm ml-1">
        (Optional)
      </span>
    </label>
    <textarea
      rows="5"
      name="notes"
      value={formData.notes}
      onChange={handleChange}
      placeholder="Any special requests"
      className="w-full border rounded-lg p-3 mt-2"
    />
  </div>

  {/* Submit */}
  <div className="md:col-span-2">
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-purple-700 to-blue-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
    >
      Confirm Booking →
    </button>
  </div>
</form>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">

            

              {/* Why Choose */}
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

              {/* Contact Card */}
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
      <WhatsAppButton/>
    </>
  );
}