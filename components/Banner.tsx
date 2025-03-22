"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/Me.png"
            height={250}
            width={250}
            alt="Ibrahim Memon"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[900px] w-auto h-auto">
          Hey, I'm Borng Ravit!
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px] pt-5">
            Work as a UX/UI Designer &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <Image
            src="/popcorn.gif"
            height={80}
            width={80}
            alt="Borng Ravit"
          />
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[700px]">
          Enthusiastic UX/UI designer passionate about user-centered interfaces, wireframing, and usability testing. Skilled in Figma and accessibility, with a focus on seamless experiences and collaborative innovation.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:borngravit168@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-2.5 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
