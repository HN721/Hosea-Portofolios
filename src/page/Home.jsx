import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Homes from "../components/Homes";
import Project from "../components/Project";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Homes />
      <About />
      <Project />
      <Footer />
    </div>
  );
}
