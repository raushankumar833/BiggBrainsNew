import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import WhatsAppButton from "./Components/WhatsAppButton";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import JoinUs from "./Pages/JoinUs";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Faqs from "./Pages/Faqs";
import TermAndCondition from "./Pages/TermAndCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ScheduleForm from "./Pages/SchduleForm";
import Portfolio from "./Pages/Portfolio";
import ScrollProgressBar from "./Pages/ScrollProgressBar";  

const App = () => {
  return (
    <>
      <ScrollProgressBar/>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/faqs" element={<Faqs/>} />
        
        {/*<Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/terms-and-conditions" element={<TermAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/scheduleForm" element={<ScheduleForm />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <WhatsAppButton/>
      <Footer/>
    </>
  );
};

export default App;
