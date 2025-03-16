import Image from "next/image";
import React from "react";
import mountain from "../assets/mountain.svg";
import subtract from "../assets/subtract.svg";
import bridge from "../assets/bridge.svg";
const Travel = () => {
  return (
    <div className="container pt-[100px] flex items-center gap-10 justify-between flex-col lg:flex-row">
      <div className="hidden sm:flex">
        <Image src={mountain} alt="#" />
        <Image className="pt-[130px] -ml-2" src={subtract} alt="#" />
        <Image className="pb-28 -ml-16" src={bridge} alt="#" />
      </div>

      <div className="flex flex-col max-w-[580px] gap-4">
        <p className="font-bold text-[#295943]">Travelers Point</p>
        <p className="font-bold text-[27px]">
          We help to find your dream place
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <p className="text-[#295943] font-bold text-[27px]">100+</p>
            <p>Holiday Package</p>
          </div>
          <div>
            <p className="text-[#295943] font-bold text-[27px]">172</p>
            <p>Hotels</p>
          </div>
          <div>
            <p className="text-[#295943] font-bold text-[27px]">68</p>
            <p>Elite Transportation</p>
          </div>
          <div>
            <p className="text-[#295943] font-bold text-[27px]">32M+</p>
            <p>we help to find your dream place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
