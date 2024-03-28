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
    { id: 10, skill: "GitHUb" },
  ];

  return (
    <div className="w-3/5 flex flex-col justify-center mt-20 mb-10">
      <h1 className="text-4xl mb-8">Skills</h1>
      <ul className="flex flex-wrap gap-4">
        {skills.map((item) => (
          <li key={item.id} className="bg-white/15 p-2 rounded-sm">
            {item.skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
