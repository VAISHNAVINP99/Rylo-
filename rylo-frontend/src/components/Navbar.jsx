import { useEffect, useState } from "react";
import axios from "axios";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
const [navbar, setNavbar] = useState(null);

useEffect(() => {
    axios
        .get("https://api.rylosupport.in/api/navbar")
        .then((res) => setNavbar(res.data));
}, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">

{/* logo */}
     <Link to="/" className="flex items-center gap-3">

    {navbar?.logo ? (
        <img
            src={`https://api.rylosupport.in/storage/${navbar.logo}`}
            alt="RYLO"
            className="h-14 w-auto"
        />
    ) : (
        <h1 className="text-3xl font-extrabold text-purple-700">
            RYLO
        </h1>
    )}

</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/services">Services</Link>

        
            <Link to="/job_opening">Job Openings</Link>

          <Link to="/contact">Contact</Link>

          <Link
            to="/book-now"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-purple-700"
        >
          {open ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t flex flex-col p-6 gap-5">

          <Link
            to="/"
            onClick={closeMenu}
            className="font-medium hover:text-purple-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="font-medium hover:text-purple-600"
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
            className="font-medium hover:text-purple-600"
          >
            Services
          </Link>

      

          <Link
            to="/contact"
            onClick={closeMenu}
            className="font-medium hover:text-purple-600"
          >
            Contact
          </Link>

       
        </div>
      </div>
    </nav>
  );
}