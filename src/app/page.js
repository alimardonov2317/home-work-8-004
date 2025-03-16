import Header from "@/components/Header";
import About from "@/components/About";
import React from "react";
import Discover from "@/components/Discover";
import Travel from "@/components/Travel";

const Home = () => {
  return (
    <div>
      <Header />
      <Travel />
      <Discover />
      <About />
    </div>
  );
};

export default Home;
