import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import WhyChoose from "../components/WhyChoose";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonial";
import CTA from "../components/CTA";
import Services from "../pages/Services";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
WhatsAppButton

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
<Services />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}