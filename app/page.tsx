"use client";

import About from "./components/About";
import CaseStudy from "./components/CaseStudy";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PricingPage from "./components/PricingPage";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CaseStudy />
      <PricingPage />
      <About />
    </>
  );
}
