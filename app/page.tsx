"use client";

import About from "./components/About";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PricingPage from "./components/PricingPage";

export default function Home() {
  return (
    <>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="case-study">
        <CaseStudy />
      </div>
      <div id="pricing">
        <PricingPage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
