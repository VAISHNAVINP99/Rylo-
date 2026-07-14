import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
    FaCheckCircle,
    FaCopy,
    FaShieldAlt,
    FaWhatsapp
} from "react-icons/fa";

export default function Payment() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [payment, setPayment] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios
            .get("https://api.rylosupport.in/api/payment-setting")
            .then((res) => setPayment(res.data));
    }, []);

    const copyUpi = () => {
        navigator.clipboard.writeText(payment.upi_id);
        alert("UPI ID copied.");
    };

    const handlePaid = async () => {

        try {

            setLoading(true);

            await axios.post(
                `https://api.rylosupport.in/api/bookings/${id}/payment`
            );

            alert("Payment submitted successfully.");

            navigate("/");

        } catch {

            alert("Unable to submit payment.");

        }

        setLoading(false);
    };

    if (!payment) {
        return (
            <div className="min-h-screen flex items-center justify-center text-lg">
                Loading...
            </div>
        );
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 py-16 px-4">

            <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

                <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-8 text-center">

                    <h1 className="text-3xl font-bold">
                        Complete Your Payment
                    </h1>

                    <p className="mt-2 text-purple-100">
                        Booking ID : #{id}
                    </p>

                </div>

                <div className="p-8">

                    <div className="flex justify-center">

                     <img
    src={payment.qr_code}
    alt="QR Code"
    className="w-72 h-72 object-contain border-4 border-purple-100 rounded-2xl shadow"
/>
                    </div>

                    <h2 className="text-center mt-6 text-2xl font-bold text-gray-800">
                        {payment.upi_name}
                    </h2>

                    <div className="mt-4 flex items-center justify-between bg-gray-100 rounded-xl px-4 py-3">

                        <span className="font-medium">
                            {payment.upi_id}
                        </span>

                        <button
                            onClick={copyUpi}
                            className="text-purple-700 hover:text-purple-900"
                        >
                            <FaCopy size={18} />
                        </button>

                    </div>

                    <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-4">

                        <h3 className="font-semibold text-purple-700 mb-2">
                            Payment Instructions
                        </h3>

                        <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
                            <li>Open any UPI app (PhonePe, GPay, Paytm).</li>
                            <li>Scan the QR code.</li>
                            <li>Complete the payment.</li>
                            <li>Click "I've Completed Payment".</li>
                            <li>Your booking will be verified by our team.</li>
                        </ul>

                    </div>

                    <button
                        onClick={handlePaid}
                        disabled={loading}
                        className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition"
                    >

                        {loading ? (
                            "Submitting..."
                        ) : (
                            <>
                                <FaCheckCircle className="inline mr-2" />
                                I've Completed Payment
                            </>
                        )}

                    </button>

                    <a
                        href="https://wa.me/917994573013"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full mt-4 flex items-center justify-center gap-2 border border-green-500 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-50"
                    >
                        <FaWhatsapp />
                        Need Help? Chat on WhatsApp
                    </a>

                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">

                        <FaShieldAlt />

                        <span>
                            Secure Payment • Your booking is confirmed after payment verification.
                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}