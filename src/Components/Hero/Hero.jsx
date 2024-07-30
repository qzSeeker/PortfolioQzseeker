"use client";
import React, { useEffect, useState } from "react";
import Chat from "../ChatBot";
import { Link } from "react-scroll";
import { TypewriterEffectSmooth } from "../ui/typewriterEffect";

function Hero() {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  const handleChatBox = () => {
    setIsChatBoxOpen(!isChatBoxOpen);
    console.log("ChatBox is Open");
  };

  const title = ["Qzseeker", "Arpit Yadav"];
  const [currentTitle, setCurrentTitle] = useState(title[0]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const interId = setInterval(() => {
      const newIndex = (titleIndex + 1) % title.length;
      setCurrentTitle(title[newIndex]);
      setTitleIndex(newIndex);
    }, 1800);

    return () => clearInterval(interId);
  });

  // text animation array
  const words1 = [
    {
    text: "Hello.",
    className: "text-[#e9f0ff]",
    },
    {
    text: "I'm Arpit",
    className: "text-[#e9f0ff]",
    },
    
];
const words2 = [
    {
    text: "Less",
    className: "text-[#adc3ef] dark:text-[#adc3ef]",
    },
    {
    text: "copying,",
    className: "text-[#adc3ef] dark:text-[#adc3ef]",
    },
    {
    text: "more",
    className: "text-[#adc3ef] dark:text-[#adc3ef]",
    },
    {
    text: "caffeine.",
    className: "text-[#adc3ef] dark:text-[#adc3ef]",
    },
];

  return (
    <>
      <div id="hero">
        <div className="h-max w-full flex items-center justify-center py-10 mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-full w-full"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 450"
            opacity="0.38"
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
                  stdDeviation="64"
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
                rx="120"
                ry="270.5"
                cx="360.52325439453125"
                cy="30.149383544921875"
                fill="hsla(0, 0%, 100%, 1.00)"
              ></ellipse>
              <ellipse
                rx="120"
                ry="270.5"
                cx="460.287524649322"
                cy="30.94709917517326"
                fill="hsla(0, 0%, 100%, 1.00)"
              ></ellipse>
              {/* <ellipse
                rx="88"
                ry="261.5"
                cx="517.287524649322"
                cy="65.94709917517326"
                fill="hsla(272, 72%, 57%, 1.00)"
              ></ellipse> */}
            </g>
          </svg>
          <div
            className={`2xl:h-14 h-12 w-80 2xl:w-1/3 md:w-2/5 ${
              isScrolled ? "bg-white/10  backdrop-blur-sm" : "bg-transparent"
            } flex items-center justify-center rounded-full border border-white/10 fixed z-20`}
          >
            <ul className="flex gap-2 2xl:gap-14 text-sm xl:text-base tracking-wider">
              <li className="cursor-pointer hover:bg-white/15 hover:border border-white/15 duration-150 ease h-9 w-16 flex items-center justify-center rounded-full">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer hover:bg-white/15 hover:border border-white/15 duration-150 ease h-9 w-16 flex items-center justify-center rounded-full">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="cursor-pointer hover:bg-white/15 hover:border border-white/15 duration-150 ease h-9 w-16 flex items-center justify-center rounded-full">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Work
                </Link>
              </li>
              <li
                onClick={handleChatBox}
                className="cursor-pointer hover:bg-white/15 hover:border border-white/15 duration-150 ease h-9 w-16 flex items-center justify-center rounded-full"
              >
                Chat
              </li>
            </ul>
          </div>
        </div>
        <div className="md:mt-48 md:mb-56 mt-20 mb-20 flex flex-col mx-1 md:mx-14">
          <h1 className="flex justify-center ">
            <TypewriterEffectSmooth words={words1}/>
          </h1>
          <h1 className="flex justify-center mb-5">
            <TypewriterEffectSmooth words={words2}/>
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
