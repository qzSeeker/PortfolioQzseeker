import React from "react";

function Skills() {
  const skills = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "CSS" },
    { id: 3, skill: "TailwindCSS" },
    { id: 4, skill: "MaterialUI" },
    { id: 5, skill: "JavaScript" },
    { id: 6, skill: "TypeScript" },
    { id: 7, skill: "ReactJS" },
    { id: 8, skill: "NextJS" },
    { id: 9, skill: "Git" },
    { id: 10, skill: "GitHub" },
  ];

  return (
    <div className="w-full">
      <div className="mt-20 mb-10 mx-8 xl:mx-56">
        <h1 className="text-2xl mb-8">Skills</h1>
        <ul className="flex flex-wrap gap-4">
          {skills.map((item) => (
            <li key={item.id} className="bg-white/15 p-2 rounded-sm">
              {item.skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
