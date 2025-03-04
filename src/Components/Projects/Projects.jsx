import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {  
  ExternalLink, 
  Github, 
  Maximize2, 
  X
} from 'lucide-react';

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "chat.if.i - Real-time Chat Application",
      description: "A fully-featured real-time chat application with Firebase authentication, seamless messaging, and responsive design.",
      webLink: "https://chat-if-i.netlify.app",
      githubLink: "https://github.com/qzSeeker/React-Chat-App",
      projectImg: 'chatifi.png',
      technologies: ["React.js", "TailwindCSS", "Firebase", "Framer Motion"],
      features: [
        "Real-time messaging",
        "User authentication",
        "Responsive design",
        "Smooth animations"
      ]
    },
    {
      title: "userm-hub - User Management CRUD App",
      description: "A comprehensive user management application with full CRUD functionality and modern UI.",
      webLink: "https://userm-hub.netlify.app",
      githubLink: "https://github.com/qzSeeker/React-User-Management-App",
      projectImg: "userm-hub.png",
      technologies: ["React.js", "ChakraUI", "TypeScript", "REST APIs"],
      features: [
        "Create, Read, Update, Delete operations",
        "TypeScript integration",
        "Responsive design",
        "API interaction"
      ]
    },
    {
      title: "qzSeeker.taskflow",
      description: "A powerful task management application with advanced features and intuitive interface.",
      webLink: "https://qzseeker-taskflow.vercel.app/",
      githubLink: "https://github.com/qzSeeker/Tasks-Management-App",
      projectImg: "taskflow.png",
      technologies: ["Next.js", "TailwindCSS", "TypeScript"],
      features: [
        "Task creation and tracking",
        "Responsive design",
        "Modern UI",
        "TypeScript powered"
      ]
    },
    {
      title: "Frontend Development Libraries Collection",
      description: "A collection of interactive web applications demonstrating frontend development skills.",
      githubLink: "https://github.com/qzSeeker",
      projectImg: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projects: [
        { name: "Random Quote Machine", link: "https://random-quote-machine-gules-sigma.vercel.app/" },
        { name: "Markdown Previewer", link: "https://markdown-previewer-seven-sigma.vercel.app/" },
        { name: "Drum Machine", link: "https://drum-machine-bay.vercel.app/" },
        { name: "JavaScript Calculator", link: "https://vercel.com/qzseekers-projects/java-script-calc" },
        { name: "25 + 5 Clock", link: "https://25-5-clock-rho.vercel.app/" }
      ],
      technologies: ["React", "Bootstrap", "TailwindCSS", "jQuery", "Redux"]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="work" className="w-full py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`${project.projectImg}`} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => handleProjectClick(project)}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
                  >
                    <Maximize2 className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {project.webLink && (
                      <a 
                        href={project.webLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <div className="flex space-x-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs bg-white/10 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed px-2 inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-black/50 border border-white/25 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <button 
                    onClick={closeModal}
                    className="text-white/70 hover:text-white"
                  >
                    <X/>
                  </button>
                </div>

                {selectedProject.projectImg && (
                  <img 
                    src={`${selectedProject.projectImg}`} 
                    alt={selectedProject.title} 
                    className="w-full rounded-lg mb-6"
                  />
                )}

                <p className="mb-6 text-white/80">{selectedProject.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-white/10 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="list-disc list-inside text-white/80">
                      {selectedProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.projects && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Mini Projects</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.projects.map((miniProject) => (
                        <a
                          key={miniProject.name}
                          href={miniProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 p-4 rounded-lg flex items-center justify-between hover:bg-white/20 transition"
                        >
                          <span>{miniProject.name}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex space-x-4">
                  {selectedProject.webLink && (
                    <a
                      href={selectedProject.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                    >
                      <ExternalLink className="w-5 h-5" /> Live Site
                    </a>
                  )}
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                </div>
                <button 
                    onClick={closeModal}
                    className="text-white/70 hover:text-white mt-4 text-center w-full"
                  >
                    Close
                  </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Project;