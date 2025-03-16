import { discoverItems } from "@/statick";
import Image from "next/image";
import React from "react";
import { TbLocationFilled } from "react-icons/tb";

const Discover = () => {
  return (
    <div className="container pt-[100px]">
      <div className="w-full flex items-center justify-center flex-col mb-[50px]">
        <p className="text-[#295943] font-bold">Top Destination</p>
        <p className="font-bold text-[27px]">Discover your love</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {discoverItems?.map((items) => (
          <div
            key={items.id}
            className="p-3 flex flex-col gap-5 rounded-[10px] shadow-[1px_2px_12px_1px_rgba(0,0,0,0.2)]"
          >
            <div>
              <Image
                width={360}
                height={227}
                src={items.img}
                alt={items.title}
                className="w-full cursor-pointer"
              />
            </div>
            <p className="font-bold text-[20px] cursor-pointer">
              {items.title}
            </p>
            <div className="flex justify-between pb-2 pt-2">
              <p className="text-[#295943] font-bold">{items.desc}</p>
              <p className="flex items-center text-[14px] gap-[10px]">
                <TbLocationFilled /> {items.day}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
