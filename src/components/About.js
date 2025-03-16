import { aboutItems } from "@/statick";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container pt-[100px] pb-[100px]">
      <div className="w-full flex items-center justify-center flex-col mb-[50px]">
        <p className="text-[#295943] font-bold">Testimonial</p>
        <p className="font-bold text-[27px]">What they say about us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {aboutItems?.map((items) => (
          <div
            key={items.id}
            className="p-4 cursor-pointer transition-colors duration-300 ease-in-out bg-white hover:bg-[#43B97F]"
          >
            <div className="flex items-center gap-4">
              <Image width={50} height={50} src={items.img} alt="" />
              <p className="text-[23px] font-bold">{items.name}</p>
            </div>
            <p className="max-w-[350px] mt-12 mb-4">{items.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
