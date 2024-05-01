import React from "react";
import Cards from "./Cards";

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
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-3 mt-8 text-sm">
          <li className="border border-violet-400 p-2 rounded">ReactJS</li>
          <li className="border border-violet-400 p-2 rounded">TailwindCSS</li>
          <li className="border border-violet-400 p-2 rounded">Zustand</li>
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
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-3 mt-8 text-sm">
          <li className="border border-violet-400 p-2 rounded">HTML</li>
          <li className="border border-violet-400 p-2 rounded">CSS</li>
          <li className="border border-violet-400 p-2 rounded">JavaScript</li>
        </ul>
      ),
    },
    {
      title: "Chat-Lee",
      description: "Realtime chat application - Currently working on it!",
      webImg: "link.png",
      webLink: "https://github.com/qzSeeker/React-chat-app",
      img:"github.png",
      link: "https://github.com/qzSeeker/React-chat-app",
      tech: (
        <ul className="grid sm:grid-cols-4 grid-cols-2 gap-3 mt-8 text-sm">
          <li className="border border-violet-400 p-2 rounded">React</li>
          <li className="border border-violet-400 p-2 rounded">TailwindCSS</li>
          <li className="border border-violet-400 p-2 rounded">Firebase</li>
          <li className="border border-violet-400 p-2 rounded">Zustand</li>
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
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-3 mt-8 text-sm">
          <li className="border border-violet-400 p-2 rounded">React</li>
          <li className="border border-violet-400 p-2 rounded">TailwindCSS</li>
          <li className="border border-violet-400 p-2 rounded">Firebase</li>
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
