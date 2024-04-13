import React from "react";
import Cards from "./Cards";

function Projects() {
  const cards = [
    {
      title: "JavaScript Projects",
      description: "Project description",
      img: "github.png",
      link: "https://github.com/qzSeeker/JavaScript-Projects",
      tech: (
        <ul className="flex gap-6 mt-8">
          <li className="border border-violet-400 p-2 rounded">HTML</li>
          <li className="border border-violet-400 p-2 rounded">CSS</li>
          <li className="border border-violet-400 p-2 rounded">JavaScript</li>
        </ul>
      ),
    },
    {
      title: "React Projects",
      description: "Project description",
      img: "github.png",
      link: "https://github.com/qzSeeker/JavaScript-Projects",
      tech: (
        <ul className="flex gap-6 mt-8">
          <li className="border border-violet-400 p-2 rounded">ReactJS</li>
          <li className="border border-violet-400 p-2 rounded">TailwindCSS</li>
          <li className="border border-violet-400 p-2 rounded">Redux</li>
        </ul>
      ),
    },
    {
      title: "Tailwind Projects",
      description: "Project description",
      img: "github.png",
      link: "https://github.com/qzSeeker/JavaScript-Projects",
      tech: (
        <ul className="flex gap-6 mt-8">
          <li className="border border-violet-400 p-2 rounded">HTML</li>
          <li className="border border-violet-400 p-2 rounded">CSS</li>
          <li className="border border-violet-400 p-2 rounded">JavaScript</li>
        </ul>
      ),
    },
    {
      title: "QzSeeker",
      description: "Project description",
      img: "github.png",
      link: "https://github.com/qzSeeker/JavaScript-Projects",
      tech: (
        <ul className="flex gap-6 mt-8">
          <li className="border border-violet-400 p-2 rounded">HTML</li>
          <li className="border border-violet-400 p-2 rounded">CSS</li>
          <li className="border border-violet-400 p-2 rounded">JavaScript</li>
        </ul>
      ),
    },
  ];
  return (
    <div className="w-full">
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
