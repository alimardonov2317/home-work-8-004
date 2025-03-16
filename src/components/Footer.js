import { footerContact, footerLinks, footerServices } from "@/statick";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoBasketballOutline, IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#295943] p-[50px] text-white">
      <div className="container flex flex-wrap items-center justify-between gap-16">
        <div>
          <p className="text-[33px]">travelaja</p>
          <p className="max-w-[281px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel
          </p>
        </div>

        <ul>
          <li className="font-bold text-[19px] mb-3.5">Links</li>
          {footerLinks?.map((item, inx) => (
            <li key={inx}>{item}</li>
          ))}
        </ul>

        <ul>
          <li className="font-bold text-[19px] mb-3.5">Services</li>
          {footerServices?.map((item, inx) => (
            <li key={inx}>{item}</li>
          ))}
        </ul>

        <ul>
          <li className="font-bold text-[19px] mb-3.5">Contact</li>
          {footerContact?.map((item, inx) => (
            <li key={inx}>{item}</li>
          ))}
        </ul>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-[19px]">Ikuti Kami</p>
          <div className="flex gap-[10px]">
            <AiOutlineInstagram className="w-6 h-6 cursor-pointer" />
            <RiFacebookCircleLine className="w-6 h-6 cursor-pointer" />
            <FaTwitter className="w-6 h-6 cursor-pointer" />
            <IoBasketballOutline className="w-6 h-6 cursor-pointer" />
            <IoLogoGithub className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
