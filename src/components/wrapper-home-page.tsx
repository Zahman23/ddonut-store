import React from "react";
import Container from "./ui/container";
import HeroSection from "./sections/home/hero-section";
import FlavorBanner from "./sections/home/flavor-banner";
import CallAction from "./sections/home/call-action";

const WrapperHomePage = () => {
  return (
    <Container>
      <section id="home" className="pt-24 pb-12">
        <HeroSection />
        <FlavorBanner />
        <CallAction />
      </section>
    </Container>
  );
};

export default WrapperHomePage;
