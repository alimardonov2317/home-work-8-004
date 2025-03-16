import React from "react";
import Hero from "./Hero";
import baground from "../assets/background.png";

const Header = () => {
  return (
    <div
      className="h-screen bg-cover bg-center -mt-18 text-white"
      style={{ backgroundImage: `url(${baground.src})` }}
    >
      <Hero />
    </div>
  );
};

export default Header;
