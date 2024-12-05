import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Main";
import Footer from "../components/Footer";
import { OurServices } from "../components/Services";

export function MainPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices/>
      <Footer />
    </div>
  );
}
