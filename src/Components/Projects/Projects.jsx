import React from "react";
import Cards from "./Cards";
import { motion } from "framer-motion";

function Projects() {
  const cards = [
    {
      title: "chat.if.i - Real-time Chat Application",
      description: "Developed a real-time chat application using React.js, highlighting advanced front-end development skills. Integrated Firebase for secure user authentication and authorization, ensuring a seamless login and signup experience. Leveraged Tailwind CSS for responsive and efficient design, demonstrating expertise in modern CSS frameworks. Utilized Firebase Realtime Database for instant message updates, facilitating smooth and interactive user communication. Designed a user-centric interface with intuitive navigation, emphasizing real-time message display for an engaging user experience.",
      webImg: "link.png",
      webLink: "https://chat-if-i.netlify.app",
      img: "github.png",
      link: "https://github.com/qzSeeker/React-Chat-App",
      projectImg: "Screenshot 2024-09-06 145731.png",
      tech: (
        <ul className="grid sm:grid-cols-4 grid-cols-2 gap-8 mt-8 text-sm md:text-md">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            ReactJs
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
            Framer
          </motion.li>
        </ul>
      ),
    },
    {
      title: "Front End Development Libraries Projects",
      description: (
        <div className="text-sm gap-4 grid">
          <div className="flex gap-3">
            Random Quote Machine
            <a href="https://random-quote-machine-gules-sigma.vercel.app/" className="underline text-green-500">Preview</a>
          </div>
          <div className="flex gap-3">
            Markdown Previewer
            <a href="https://markdown-previewer-seven-sigma.vercel.app/" className="underline text-green-500">Preview</a>
          </div>
          <div className="flex gap-3">
            Drom Machine
            <a href="https://drum-machine-bay.vercel.app/" className="underline text-green-500">Preview</a>
          </div>
          <div className="flex gap-3">
            JavaScript Calculator
            <a href="https://vercel.com/qzseekers-projects/java-script-calc" className="underline text-green-500">Preview</a>
          </div>
          <div className="flex gap-3">
            25 + 5 Clock
            <a href="https://25-5-clock-rho.vercel.app/" className="underline text-green-500">Preview</a>
          </div>
        </div>
      ),
      webImg: "link.png",
      webLink: "#",
      img: "github.png",
      link: "https://github.com/qzSeeker",
      tech: (
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-8 mt-8 text-sm md:text-md">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            Bootstrap
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
            React
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            jQuery
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            Redux
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            React and Redux
          </motion.li>
        </ul>
      ),
    },
    {
      title: "Tic-tac-toi",
      description: "Made this simple XO-Blast game using React and TailwindCSS",
      webImg: "link.png",
      webLink: "https://xo-blast.netlify.app",
      img: "github.png",
      link: "https://github.com/qzSeeker/Tic-Tac-Toe",
      projectImg: "Screenshot 2024-08-18 154300.png",
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
      title: "Finance SaaS App - MERN Stack",
      description: "Project status - Currently Working on it!",
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
            NextJs
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            TypeScript
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
            MongoDB
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            className="bg-[#0b101a] cursor-pointer p-2 rounded-lg"
          >
            ShadCn
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
