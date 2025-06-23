import React from "react";
import PickUpInput from "./PickUpInput";

function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center pt-16 md:px-16 font-poppins bg-gradient-to-b sm:bg-gradient-to-r from-[#CFE3D6] via-[#a7cdb7] to-[#7cbf9e]">
      {/* <img
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/videos/hero1.gif"
    autoPlay
    loop
    muted
    playsInline
  /> */}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
      <div className="md:w-1/2 flex flex-col gap-4 sm:gap-6 px-7 md:px-0 pt-3 md:pt-0 mt-10">
        <h1 className="font-bold text-4xl sm:text-4xl md:text-6xl text-center sm:text-left">
          Less Time on Laundry, More Time for What Matters
        </h1>
        <p className="pr-4 text-center sm:text-left">
          We pickup, wash, and deliver your clothes back fresh and clean.
        </p>
        <div className="relative flex justify-center sm:justify-start">
          <PickUpInput />
          <div className="absolute hidden md:block sm:translate-x-80 lg:translate-x-80 top-0 rotate-12">
            <span className="font-caveat text-2xl text-primary">
              Book in 60 secs
            </span>
            <img
              src="./hand-drawn-spiral-arrow.png"
              alt="handArrow"
              className="w-20 scale-x-[-1]"
            />
          </div>
        </div>
      </div>

      <div className="md:w-1/2 items-end sm:self-end">
        <div className="">
          <img src="./hero-image.png" alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Header;
