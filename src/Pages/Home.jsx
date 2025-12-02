import React, { useEffect } from "react";
import HomeHero from "../Components/HomeHero";
import HomeCenter from "../Components/HomeCenter";
import HelpYou from "../Components/HelpYou";
import CoreValues from "../Components/CoreValues";
import BusinessStats from "../Components/BusinessStats";
import WorkHistory from "../Components/WorkHistory";
import HeroSection from "../Components/HeroSection";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeHero />
      <HomeCenter />
      <HelpYou/>
      <CoreValues/>
      <BusinessStats/>
      <WorkHistory/>
      <HeroSection/>
    </>
  );
}

export default Home;
