import { motion, useInView } from "framer-motion";
import { Code, Layers, Wrench } from "lucide-react";
import { useRef } from "react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "TypeScript", level: 80, color: "bg-blue-500" },
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-600" },
        { name: "Node.js", level: 75, color: "bg-green-500" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      skills: [
        { name: "React.js", level: 90, color: "bg-cyan-500" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        { name: "Express", level: 75, color: "bg-green-600" },
        { name: "Redux", level: 80, color: "bg-purple-600" },
        { name: "Tailwind CSS", level: 85, color: "bg-teal-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-green-400" />,
      skills: [
        { name: "Git", level: 85, color: "bg-orange-600" },
        { name: "GitHub", level: 90, color: "bg-gray-700" },
        { name: "VS Code", level: 95, color: "bg-blue-700" },
        { name: "Netlify", level: 80, color: "bg-teal-600" },
        { name: "Vercel", level: 85, color: "bg-gray-900" }
      ]
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="w-full text-white py-16 ">
      <div className="xl:mx-40 mx-8">
        <motion.h2 
          className="text-2xl mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div 
          ref={containerRef} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: categoryIndex * 0.2 
              }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="ml-3 text-xl font-semibold">{category.title}</h3>
              </div>
              
              {category.skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className={`${skill.color} h-2.5 rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;