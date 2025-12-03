import React from "react";
import { Box, Typography, Button, LinearProgress, Stack, keyframes } from "@mui/material";
import AboutHero from "./AboutHero";
import AboutHero2 from "./AboutHero2";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";
import ConnectUs from "../Components/ConnectUs";



export default function AboutUs() {
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
