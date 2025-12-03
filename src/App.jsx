import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import JoinUs from "./Pages/JoinUs";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoinUs />} />
        {/*<Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
