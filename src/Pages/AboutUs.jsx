import React from "react";
import { useEffect } from "react";
import { Box, Typography, Button, LinearProgress, Stack, keyframes } from "@mui/material";
import ConnectUs from "../Components/ConnectUs";
import AboutHero from "../Components/AboutHero";
import AboutHero2 from "../Components/AboutHero2";
import Testimonial from "../Components/Testimonial";
import OurTeam from "../Components/OurTeam";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About-Us | BiggBrains";
  }, []);
  return (
    <>
      {/* Hero Section */}
      <AboutHero />

      {/* Who We Are Section */}
      <AboutHero2 />

      {/* Our Team Section */}
      <OurTeam />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Connect Us Section  */}
      <ConnectUs/>
    </>
  );
}
