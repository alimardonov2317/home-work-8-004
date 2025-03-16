"use client";
import { navbarItems } from "@/statick";
import React, { useState } from "react";
import flag from "../assets/flag.svg";
import Image from "next/image";
import { IoIosArrowDown, IoClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container relative text-white">
      <div className="flex items-center justify-between sticky pt-5 left-0 w-full">
        <p className="text-[33px] cursor-pointer">travelaja</p>
        <ul className="hidden md:flex">
          {navbarItems?.map((items, inx) => (
            <li
              key={inx}
              className="cursor-pointer opacity-80 hover:opacity-100 px-5 py-2.5 transition duration-300 ease-in-out "
            >
              {items}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-[10px]">
          <Image src={flag} alt="flag" className="cursor-pointer" />
          <p className="cursor-pointer">ID</p>
          <IoIosArrowDown className="cursor-pointer" />
          <GiHamburgerMenu
            className="flex md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 bg-black w-[200px] h-screen"
      >
        <ul className="flex flex-col text-center">
          {navbarItems?.map((items, inx) => (
            <li
              key={inx}
              className="py-4  cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              {items}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
