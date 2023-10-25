"use client";
import { downArrow } from "@/public/assets";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [bgHome, setBgHome] = useState("bg-home1");

  return (
    <section
      className={`max-container h-screen ${bgHome} bg-cover bg-center px-4 lg:px-24 relative`}
    >
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between relative">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-2/3 gap-3">
          <h1 className="font-eb-garamond text-center lg:text-left text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-[50px] md:leading-[80px] lg:leading-[100px] tracking-widest text-shadow">
            EMBRACE THE JOURNEY WITH ROADPRINCE
          </h1>
          <p className="font-dosis text-center lg:text-left font-light lg:text-xl text-white w-full lg:w-1/2 leading-8 tracking-widest text-shadow">
            Discover the Beauty of the Open Road and Create Lasting Memories
          </p>
        </div>
        <div className="absolute lg:relative bottom-5 lg:bottom-auto flex lg:flex-col gap-[30px]">
          <div onClick={() => setBgHome("bg-home1")} className="w-20 h-20 lg:w-[170px] lg:h-[120px] bg-home1 bg-cover rounded-xl hover:scale-105 transition"></div>
          <div onClick={() => setBgHome("bg-home2")} className="w-20 h-20 lg:w-[170px] lg:h-[120px] bg-home2 bg-cover rounded-xl hover:scale-105 transition"></div>
          <div onClick={() => setBgHome("bg-home3")} className="w-20 h-20 lg:w-[170px] lg:h-[120px] bg-home3 bg-cover rounded-xl hover:scale-105 transition"></div>
        </div>
        <div className="hidden lg:flex flex-col absolute bottom-[20px] left-1/2 items-center gap-3 lg:visible motion-safe:animate-bounce">
          <h5 className="font-dosis font-light text-2xl text-white tracking-widest">
            scroll down
          </h5>
          <Image src={downArrow} alt="down-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
