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
  ];

  const others = [
    { id: 9, skill: "VS Code" },
    { id: 10, skill: "Git" },
    { id: 11, skill: "GitHub" },
    { id: 12, skill: "Netlify" },
    { id: 13, skill: "Firebase" },
  ];
  return (
    <div className="w-full">
      <div className="mt-20 mb-10 mx-8 xl:mx-40">
        <h1 className="text-2xl mb-8">Skills</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/15 p-4 flex flex-col gap-4 rounded-lg transition-all shadow-md hover:shadow-white/20 ease-in hover:border border-white/15">
            <h1>Frontend</h1>
            <ul className="flex flex-wrap gap-4">
              {skills.map((item) => (
                <li
                  key={item.id}
                  className={`bg-[#0b101a] hover:opacity-90 cursor-pointer transition-all ease-in p-3 rounded-lg text-center text-sm md:text-md w-max`}
                >
                  {item.skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/15 p-4 flex flex-col gap-4 rounded-lg transition-all shadow-md hover:shadow-white/20 ease-in hover:border border-white/15">
            <h1>Other tools</h1>
            <ul className="flex flex-wrap gap-4">
              {others.map((item) => (
                <li
                  key={item.id}
                  className={`bg-[#0b101a] hover:opacity-90 cursor-pointer transition-all ease-in p-3 rounded-lg text-center text-sm md:text-md w-max`}
                >
                  {item.skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
