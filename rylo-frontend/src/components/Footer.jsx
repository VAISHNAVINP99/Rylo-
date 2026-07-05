import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/footer")
      .then((res) => setFooter(res.data))
      .catch((err) => console.log(err));
  }, []);

  const formatUrl = (url) => {
    if (!url) return "#";

    url = url.trim();

    if (
      url.startsWith("http://") ||
      url.startsWith("https://")
    ) {
      return url;
    }

    if (/^\d+$/.test(url)) {
      return `https://wa.me/${url}`;
    }

    if (url.includes("wa.me/")) {
      return `https://${url}`;
    }

    if (url.includes("facebook.com")) {
      return `https://${url}`;
    }

    if (url.includes("instagram.com")) {
      return `https://${url}`;
    }

    return `https://${url}`;
  };

  if (!footer) {
    return (
      <footer className="bg-gradient-to-r from-[#16003D] via-[#24005A] to-[#16003D] text-white py-10 text-center">
        Loading...
      </footer>
    );
  }

  return (
    <footer className="bg-gradient-to-r from-[#16003D] via-[#24005A] to-[#16003D] text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div className="text-center lg:text-left">

            <h2 className="text-4xl font-bold">
              {footer.company_name}
            </h2>

            <p className="mt-4 text-purple-200 font-medium">
              {footer.tagline}
            </p>

            <p className="mt-5 text-gray-300 leading-7">
              {footer.description}
            </p>

          </div>

          {/* Quick Links */}

          <div className="text-center lg:text-left">

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-purple-300 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-purple-300 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-purple-300 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/pricing" className="hover:text-purple-300 transition">
                  Pricing
                </Link>
              </li>

              <li>
                <Link to="/book-now" className="hover:text-purple-300 transition">
                  Book Now
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-purple-300 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="text-center lg:text-left">

            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-center justify-center lg:justify-start gap-4">

                <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <a
                  href={`tel:${footer.phone}`}
                  className="hover:text-purple-300 transition"
                >
                  {footer.phone}
                </a>

              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">

                <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <a
                  href={`mailto:${footer.email}`}
                  className="hover:text-purple-300 transition break-all"
                >
                  {footer.email}
                </a>

              </div>

              <div className="flex items-start justify-center lg:justify-start gap-4">

                <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                  <FaMapMarkerAlt />
                </div>

                <p className="leading-7">
                  {footer.address}
                </p>

              </div>

            </div>

          </div>

          {/* Follow */}

          <div className="text-center lg:text-left">

            <h3 className="text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <p className="text-gray-300 mb-6">
              Stay connected with us through social media.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">

              {footer.facebook && (
                <a
                  href={formatUrl(footer.facebook)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-purple-700 hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                >
                  <FaFacebookF />
                </a>
              )}

              {footer.instagram && (
                <a
                  href={formatUrl(footer.instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-purple-700 hover:bg-pink-600 transition duration-300 flex items-center justify-center"
                >
                  <FaInstagram />
                </a>
              )}

              {footer.whatsapp && (
                <a
                  href={formatUrl(footer.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-purple-700 hover:bg-green-600 transition duration-300 flex items-center justify-center"
                >
                  <FaWhatsapp />
                </a>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-purple-900">

        <div className="max-w-7xl mx-auto px-6 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-gray-400 text-center text-sm">
              {footer.copyright}
            </p>

            <div className="flex flex-wrap justify-center gap-6">

              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="text-gray-400 hover:text-white transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}