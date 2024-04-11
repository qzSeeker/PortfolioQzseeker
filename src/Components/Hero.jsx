'use client'
import React, { useState } from "react";
import Chat from "./ChatBot";

function Hero() {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  const handleChatBox = () => {
    setIsChatBoxOpen(!isChatBoxOpen);
    console.log("ChatBox is Open");
  }

  return (
    <>
      <div>
        <div className="h-max w-full flex items-center justify-center py-10 mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            opacity="0.39"
            className="absolute h-4/5 w-full"
          >
            <defs>
              <filter
                id="bbblurry-filter"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="76"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
              <ellipse
                rx="107"
                ry="277.5"
                cx="289.46808938656545"
                cy="395.75458660772836"
                fill="hsla(272, 83%, 56%, 1.00)"
              ></ellipse>
              <ellipse
                rx="107"
                ry="277.5"
                cx="443.8336199663372"
                cy="254.53744329030303"
                fill="hsla(88, 100%, 30%, 1.00)"
              ></ellipse>
            </g>
          </svg>
          <div className="2xl:h-14 h-12 w-80 2xl:w-1/3 md:w-2/5 backdrop-blur-sm bg-white/10 flex items-center justify-center rounded-full border border-white/10 fixed">
            <ul className="flex gap-2 2xl:gap-14 text-sm xl:text-base tracking-wider">
              <li className="cursor-pointer hover:bg-white/15 hover:border border-white/15 duration-150 ease h-9 w-16 flex items-center justify-center rounded-full">
                Home
              </li>
              <li className="cursor-pointer hover:bg-white/15 hover:border border-white/15 duration-150 ease h-9 w-16 flex items-center justify-center rounded-full">
                About
              </li>
              <li className="cursor-pointer hover:bg-white/15 hover:border border-white/15 duration-150 ease h-9 w-16 flex items-center justify-center rounded-full">
                Work
              </li>
              <li onClick={handleChatBox} className="cursor-pointer hover:bg-white/15 border hover:border-white/15 border-violet-400 duration-150 ease h-9 w-16 flex items-center justify-center rounded-full">
                Chat
              </li>
            </ul>
          </div>
        </div>
        <div className="md:mt-48 md:mb-56 mt-20 mb-20 flex flex-col mx-1 md:mx-14">
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-extrabold text-center mb-5">
            Hello. I'm QzSeeker.
          </h1>
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-extrabold text-violet-400 text-center leading-normal">
            Less copying, more coffee.
          </h1>
          <p className="text-center mt-8 text-lg tracking-wide px-4">
            My passion? Learning and creating content that simplifies the
            complex and helps others thrive.
          </p>
        </div>
      </div>
      {isChatBoxOpen ? <Chat /> : " "}
    </>
  );
}

export default Hero;
