import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function JobApplication() {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        whatsapp: "",
        email: "",
        place: "",
        job_type: "",
        position: "",
        message: "",
        resume: null,
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleFileChange = (e) => {

        setFormData((prev) => ({
            ...prev,
            resume: e.target.files[0],
        }));

        setErrors((prev) => ({
            ...prev,
            resume: "",
        }));
    };

    const validate = () => {

        let newErrors = {};

        if (!formData.name.trim())
            newErrors.name = "Full Name is required";

        if (!formData.phone.trim())
            newErrors.phone = "Phone Number is required";

        if (!formData.place.trim())
            newErrors.place = "Place is required";

        if (!formData.job_type)
            newErrors.job_type = "Select Job Type";

        if (!formData.resume)
            newErrors.resume = "Upload Resume";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSuccess("");

        if (!validate()) return;

        setLoading(true);

        try {

            const data = new FormData();

            data.append("name", formData.name);
            data.append("phone", formData.phone);
            data.append("whatsapp", formData.whatsapp);
            data.append("email", formData.email);
            data.append("place", formData.place);
            data.append("job_type", formData.job_type);
            data.append("position", formData.position);
            data.append("message", formData.message);
            data.append("resume", formData.resume);

            await axios.post(
                "https://api.rylosupport.in/api/job-applications",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setSuccess("Application submitted successfully.");

            setFormData({
                name: "",
                phone: "",
                whatsapp: "",
                email: "",
                place: "",
                job_type: "",
                position: "",
                message: "",
                resume: null,
            });

            document.getElementById("resume").value = "";

        } catch (error) {

            console.log(error);

            alert("Failed to submit application.");

        } finally {

            setLoading(false);

        }

    };

    return (
        <>
            <Navbar />

            <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">

                <div className="max-w-4xl mx-auto px-5">

                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

                        <div className="text-center mb-10">

                            <h1 className="text-4xl font-bold text-purple-700">
                                Job Application
                            </h1>

                            <p className="mt-4 text-gray-600">
                                Join the RYLO Support Services team by submitting
                                your application below.
                            </p>

                        </div>

                        {success && (

                            <div className="mb-6 bg-green-100 text-green-700 p-4 rounded-xl">

                                {success}

                            </div>

                        )}

                     <form
    onSubmit={handleSubmit}
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
>

                        {/* Full Name */}
<div>
    <label className="block mb-2 font-semibold">
        Full Name *
    </label>

    <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Full Name"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
    />

    {errors.name && (
        <p className="text-red-500 text-sm mt-1">
            {errors.name}
        </p>
    )}
</div>

{/* Phone */}

<div>
    <label className="block mb-2 font-semibold">
        Phone Number *
    </label>

    <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter Phone Number"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
    />

    {errors.phone && (
        <p className="text-red-500 text-sm mt-1">
            {errors.phone}
        </p>
    )}
</div>

{/* WhatsApp */}

<div>
    <label className="block mb-2 font-semibold">
        WhatsApp Number
    </label>

    <input
        type="tel"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        placeholder="Enter WhatsApp Number"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
    />
</div>

{/* Email */}

<div>
    <label className="block mb-2 font-semibold">
        Email Address
    </label>

    <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
    />
</div>

{/* Place */}

<div>
    <label className="block mb-2 font-semibold">
        Place *
    </label>

    <input
        type="text"
        name="place"
        value={formData.place}
        onChange={handleChange}
        placeholder="Enter Place"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
    />

    {errors.place && (
        <p className="text-red-500 text-sm mt-1">
            {errors.place}
        </p>
    )}
</div>

{/* Position */}

<div>
    <label className="block mb-2 font-semibold">
        Position Applying For
    </label>

    <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Eg: Driver, Housekeeping"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
    />
</div>

{/* Job Type */}

<div>
    <label className="block mb-2 font-semibold">
        Job Type *
    </label>

    <select
        name="job_type"
        value={formData.job_type}
        onChange={handleChange}
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
    >
        <option value="">
            Select Job Type
        </option>

        <option value="Full Time">
            Full Time
        </option>

        <option value="Part Time">
            Part Time
        </option>

    </select>

    {errors.job_type && (
        <p className="text-red-500 text-sm mt-1">
            {errors.job_type}
        </p>
    )}
</div>

{/* Resume */}

<div>
    <label className="block mb-2 font-semibold">
        Upload Resume *
    </label>

    <input
        id="resume"
        type="file"
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        className="w-full border rounded-xl p-3"
    />

    {errors.resume && (
        <p className="text-red-500 text-sm mt-1">
            {errors.resume}
        </p>
    )}
</div>

{/* Message */}

<div className="md:col-span-2">

    <label className="block mb-2 font-semibold">
        Message
    </label>

    <textarea
        rows="5"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us about yourself..."
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
    />

</div>

{/* Submit */}

<div className="md:col-span-2">

    <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition duration-300"
    >

        {loading
            ? "Submitting..."
            : "Submit Application"}

    </button>

</div>

</form>

</div>
</div>
</section>

<Footer />
<WhatsAppButton />

</>
);
}