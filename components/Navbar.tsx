"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          title="ibrahim logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Ravit.svg"
            alt="Borng Ravit"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto"
          />
        </a>

        <div className="flex flex-row gap-5">
        <div
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Home
          </div>
          {/* <div
            
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            About Me
          </div> */}
          <div
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Experience
          </div>
          <div
            onClick={() => window.open("mailto:borngravit168@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-slate-700 hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
