import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
 import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Booking from "./pages/Booking";
 import Contact from "./pages/Contact";

 import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import JobApplication from "./pages/JobApplication";





function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
           <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
          <Route path="/job_opening" element={<JobApplication />} />
        <Route path="/book-now" element={<Booking />} />
        <Route path="/contact" element={<Contact />}  /> 
    
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />

       <Route
  path="/terms-and-conditions"
  element={<TermsConditions />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;