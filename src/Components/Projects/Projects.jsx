import React from "react";
import Cards from "./Cards";
import { motion } from "framer-motion";

function Projects() {
  const cards = [
    {
      title: "Tic-tac-toi",
      description: "Currently working on it!",
      webImg: "link.png",
      webLink: "https://xo-blast.netlify.app",
      img: "github.png",
      link: "https://github.com/qzSeeker/Tic-Tac-Toe",
      tech: (
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-8 mt-8 text-sm md:text-md">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            ReactJS
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            TailwindCSS
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            Zustand
          </motion.li>
        </ul>
      ),
    },
    {
      title: "JavaScript Projects",
      description: (
        <ul className="text-sm gap-4 md:flex">
          <li>- Quote Generator</li>
          <li>- Stopwatch</li>
          <li>- Todo List</li>
        </ul>
      ),
      webImg: "link.png",
      webLink: "https://github.com/qzSeeker/JavaScript-Projects",
      img: "github.png",
      link: "https://github.com/qzSeeker/JavaScript-Projects",
      tech: (
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-8 mt-8 text-sm md:text-md">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            HTML
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            CSS
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            JavaScript
          </motion.li>
        </ul>
      ),
    },
    {
      title: "Chat-Lee",
      description: "Realtime chat application - Currently working on it!",
      webImg: "link.png",
      webLink: "https://github.com/qzSeeker/React-Chat-App",
      img: "github.png",
      link: "https://github.com/qzSeeker/React-Chat-App",
      tech: (
        <ul className="grid sm:grid-cols-4 grid-cols-2 gap-8 mt-8 text-sm md:text-md">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            React
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            TailwindCSS
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            Firebase
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            Zustand
          </motion.li>
        </ul>
      ),
    },
    {
      title: "QzSeeker-Clothing",
      description: "Project status - pending...",
      webImg: "link.png",
      webLink: "#",
      img: "github.png",
      link: "#",
      tech: (
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-8 mt-8 text-sm md:text-md">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            React
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            TailwindCSS
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            Firebase
          </motion.li>
        </ul>
      ),
    },
  ];
  return (
    <div className="w-full" id="work">
      <div className="mt-12 mb-10 mx-8 xl:mx-40">
        <h1 className="text-2xl mb-8">Projects</h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {cards.map((card) => (
            <Cards key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
