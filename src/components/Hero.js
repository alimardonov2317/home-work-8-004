import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="container h-screen flex items-center justify-center text-center">
      <div className="max-w-[780px] mt-[200px] md:mt-[150px] lg:mt-[80px] flex flex-col mx-auto">
        <h2 className="text-[25px] md:text-[48px]">
          Explore the world with a smile
        </h2>
        <p className="hidden sm:flex max-w-[686px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-4 md:flex items-center justify-between bg-white text-black rounded-[8px] p-2 mt-[65px]">
          <p className="flex items-center gap-4 cursor-pointer">
            <FaLocationDot />
            City or Destination
          </p>
          <p className="hidden sm:flex md:border-l h-[49px] items-center pl-[10px] cursor-pointer">
            Date of stay
          </p>
          <p className="hidden sm:flex md:border-l h-[49px] items-center pl-[10px] cursor-pointer">
            Person
          </p>
          <button className="flex items-center bg-[#43B97F] text-white p-4 rounded-xl gap-5 active:bg-green-600 transition duration-300 ease-in-out cursor-pointer">
            Find Trip Now <IoSearchSharp className="w-8 h-8" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
