import React from "react";

function Skills() {
  const skills = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "CSS" },
    { id: 3, skill: "JavaScript" },
    { id: 4, skill: "React.js" },
    { id: 5, skill: "Next.js" },
    { id: 6, skill: "Tailwind CSS" },
    { id: 7, skill: "Bootstrap" },
    { id: 8, skill: "Material UI" },
    { id: 1, skill: "VS Code" },
    { id: 2, skill: "Git" },
    { id: 3, skill: "GitHub" },
    { id: 1, skill: "Netlify" },
    { id: 2, skill: "Firebase" },
  ];

  return (
    <div className="w-full">
      <div className="mt-20 mb-10 mx-8 xl:mx-40">
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
