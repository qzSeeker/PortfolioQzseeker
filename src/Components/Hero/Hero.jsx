/* eslint-disable no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import Chat from "../ChatBot";
import { Link } from "react-scroll";
import { FlipWords } from "../ui/flip-words";
import Resume from "../Resume/Resume";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Send, Twitter } from "lucide-react";

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

// flip-words
const flipWords = ["Arpit-Yadav", "QzSeeker"];

// Social Media Links
const socialLinks = [
  { 
    icon: <Github className="w-6 h-6" />, 
    href: "https://github.com/qzSeeker" 
  },
  { 
    icon: <Linkedin className="w-6 h-6" />, 
    href: "https://linkedin.com/in/arpit-yadav-29b5a0257/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
  },
  { 
    icon: <Twitter className="w-6 h-6" />, 
    href: "https://twitter.com/qzseeker" 
  }
];

  return (
    <>
      <div id="hero">
        <div className="h-max w-full flex items-center justify-center py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-full w-full"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
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
        <div className="py-20 md:py-28 max-w-6xl flex flex-col items-center mx-1 md:mx-14">
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-extrabold text-[#e9f0ff] text-center mb-5 relative">
              {`Hello. I'm`} 
            <FlipWords words={flipWords}></FlipWords>
          </h1>
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-[#e9f0ff] to-[#64748b] bg-clip-text text-transparent text-center">
            A Frontend Engineer Specializing in AI-Driven User Experiences.
          </h1>

          <p className="text-center mt-10 md:text-xl text-lg tracking-wide px-4">
            My passion? Learning and creating content that simplifies the
            complex and helps others thrive.
          </p>
          
          {/* Action Buttons */}
        <motion.div 
          className="mt-10 flex items-center gap-6 z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* <button className="flex items-center gap-2 border cursor-pointer border-white/15 px-5 py-3 rounded-full hover:bg-white/10 transition">
            Download CV
          </button> */}
          <Resume/>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button className="flex items-center gap-2 border cursor-pointer border-white/15 px-5 py-3 rounded-full hover:bg-white/10 transition">
              Contact Me
            </button>
          </Link>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          className="mt-10 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
        </div>

      </div>
      <div className="">
      {isChatBoxOpen ? <Chat /> : " "}
      </div>
    </>
  );
}

export default Hero;
