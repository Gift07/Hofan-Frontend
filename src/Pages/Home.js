import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div className="w-sreen font-poppins overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <Welcome />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
