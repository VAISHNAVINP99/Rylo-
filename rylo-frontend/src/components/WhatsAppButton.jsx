import { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    fetchFooter();
  }, []);

  const fetchFooter = async () => {
    try {
      const res = await axios.get(
        "https://api.rylosupport.in/api/footer-settings"
      );

      setWhatsapp(res.data.whatsapp);
    } catch (error) {
      console.error(error);
    }
  };

  if (!whatsapp) return null;

  const whatsappLink = whatsapp.startsWith("91")
    ? `https://wa.me/${whatsapp}`
    : `https://wa.me/91${whatsapp}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl z-50 hover:scale-110 transition-transform duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}