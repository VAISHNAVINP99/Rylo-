import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Payment() {

    const { id } = useParams();

    const [payment, setPayment] = useState(null);

    useEffect(() => {

        axios.get("https://api.rylosupport.in/api/payment-setting")
        .then(res => {
            setPayment(res.data);
        });

    }, []);

    if(!payment) return <h2>Loading...</h2>;

    return (

        <div className="max-w-xl mx-auto py-20">

            <h1 className="text-3xl font-bold text-center mb-8">

                Complete Payment

            </h1>

            <div className="shadow-lg rounded-xl p-8">

                <img
                    src={`https://api.rylosupport.in/storage/${payment.qr_code}`}
                    className="w-72 mx-auto"
                />

                <h2 className="text-center text-xl mt-5">

                    {payment.upi_name}

                </h2>

                <h3 className="text-center">

                    {payment.upi_id}

                </h3>

                <button
                    className="w-full mt-8 bg-purple-700 text-white py-3 rounded"
                >

                    I Have Paid

                </button>

            </div>

        </div>

    );

}