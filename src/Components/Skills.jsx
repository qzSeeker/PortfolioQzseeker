import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Skills() {
  const languages = [
    { id: 1, skill: "HTML5" },
    { id: 2, skill: "CSS3" },
    { id: 3, skill: "JavaScript" },
    { id: 4, skill: "TypeScript" },
    { id: 5, skill: "Node.js" },
  ];

  const framLib = [
    { id: 1, skill: "React.js" },
    { id: 2, skill: "Next.js" },
    { id: 3, skill: "Express" },
    { id: 4, skill: "Tailwind CSS" },
    { id: 5, skill: "Bootstrap" },
    { id: 6, skill: "Material UI" },
    { id: 7, skill: "ShadCn" },
    { id: 8, skill: "Redux" },
    { id: 8, skill: "jQuery" },
    { id: 9, skill: "SASS" },
  ]

  const others = [
    { id: 9, skill: "VS Code" },
    { id: 10, skill: "Git" },
    { id: 11, skill: "GitHub" },
    { id: 12, skill: "Netlify" },
    { id: 12, skill: "Vercel" },
    { id: 13, skill: "Firebase" },
    { id: 13, skill: "MongoDB" },
  ];

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, {once : true});

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, {once : true});

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, {once : true});

  return (
    <div className="w-full">
      <div className="mt-20 mb-10 mx-8 xl:mx-40">
        <h1 className="text-2xl mb-8">Skills</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div ref={ref1} className="bg-white/10 p-4 flex flex-col gap-4 rounded-lg transition-all duration-200 will-change-transform ease-in hover:border border-white/15"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView1 ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.3,
            delay: 0.3,
            easeIn: [0.25, 1, 0.25, 1]
          }}
          >
            <h1>Languages</h1>
            <ul className="flex flex-wrap gap-4">
              {languages.map((item) => (
                <motion.li
                  key={item.id}
                  className={`bg-[#0b101a] cursor-pointer p-3 rounded-lg text-center text-sm md:text-md w-max`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 8 }}
                >
                  {item.skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div ref={ref2} className="bg-white/10 p-4 flex flex-col gap-4 rounded-lg transition-all duration-200 will-change-transform ease-in hover:border border-white/15"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.3,
            delay: 0.3,
            easeIn: [0.25, 1, 0.25, 1]
          }}
          >
            <h1>Frameworks & Libraries</h1>
            <ul className="flex flex-wrap gap-4">
              {framLib.map((item) => (
                <motion.li
                  key={item.id}
                  className={`bg-[#0b101a] cursor-pointer p-3 rounded-lg text-center text-sm md:text-md w-max`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 8 }}
                >
                  {item.skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div ref={ref3} className="bg-white/10 p-4 flex flex-col gap-4 rounded-lg transition-all hover:border border-white/15"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView3 ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.3,
            delay: 0.3,
            easeIn: [0.25, 1, 0.25, 1]
          }}
          >
            <h1>Other tools</h1>
            <ul className="flex flex-wrap gap-4">
              {others.map((item) => (
                <motion.li
                  key={item.id}
                  className={`bg-[#0b101a] cursor-pointer p-3 rounded-lg text-center text-sm md:text-md w-max`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 8 }}
                >
                  {item.skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
