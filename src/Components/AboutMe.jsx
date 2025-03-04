import { motion } from "framer-motion";
import { BookOpen, Rocket, Target } from "lucide-react";

function AboutMe() {
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const aboutCards = [
    {
      icon: <Target className="w-8 h-8 text-blue-400 mb-4" />,
      title: "What drives me?",
      description: "Coming from a tier-3 private university, I've learned the value of grit, self-learning, and relentless growth. My journey isn't just about writing code—it's about creating solutions that make a difference."
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400 mb-4" />,
      title: "What I'm building?",
      description: "I'm the founder of internSteps, a platform designed to revolutionize internships by connecting verified startups with talented students. The goal? To make internships secure, transparent, and growth-driven for both companies and students."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-400 mb-4" />,
      title: "What's next?",
      description: "I aspire to pursue an MCA at a top-tier university, using my academic journey as a launchpad for groundbreaking tech innovations. My mission is to collaborate, learn, and build solutions that push technological boundaries and create a lasting impact."
    }
  ];

  return (
    <div className="mx-8 xl:mx-40" id="about">
      <div>
        <h1 className="text-2xl">About</h1>
        <p className="tracking-wide mt-8">
          I’m a self-taught frontend developer with a passion for turning ideas
          into impactful tech solutions. Currently, I’m mastering the MERN stack
          and diving deep into Data Structures & Algorithms with C++, bridging the
          gap between theory and real-world innovation.
        </p>
      </div>

      <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {aboutCards.map((card) => (
        <motion.div
          key={card.title}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 
            border border-white/15 rounded-xl p-6 
            transition-all duration-300 
            hover:border-white/30 
            hover:shadow-xl 
            overflow-hidden"
        >
          {/* Card Content */}
          <div className="relative z-10">
            {card.icon}
            <h1 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">
              {card.title}
            </h1>
            <p className="text-white/70 group-hover:text-white/90 transition-colors">
              {card.description}
            </p>
          </div>

          {/* Hover Overlay Effect */}
          <div 
            className="absolute inset-0 
            bg-gradient-to-br from-blue-900/10 to-purple-900/10 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 
            z-0"
          ></div>
        </motion.div>
      ))}
    </motion.div>
    </div>
  );
}

export default AboutMe;
