import React from "react";
import Cards from "./Cards";

function Projects() {
  const cards = [
    {
      title: "Tic-tac-toi",
      description: "Project description",
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
      description: "Project description",
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
      title: "Project-3",
      description: "Project description",
      webImg: "link.png",
      webLink: "#",
      img:"github.png",
      link: "https://www.google.com",
      tech: (
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-3 mt-8 text-sm">
          <li className="border border-violet-400 p-2 rounded">HTML</li>
          <li className="border border-violet-400 p-2 rounded">CSS</li>
          <li className="border border-violet-400 p-2 rounded">JavaScript</li>
        </ul>
      ),
    },
    {
      title: "QzSeeker",
      description: "Project description",
      webImg: "link.png",
      webLink: "#",
      img: "github.png",
      link: "#",
      tech: (
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-3 mt-8 text-sm">
          <li className="border border-violet-400 p-2 rounded">HTML</li>
          <li className="border border-violet-400 p-2 rounded">CSS</li>
          <li className="border border-violet-400 p-2 rounded">JavaScript</li>
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
