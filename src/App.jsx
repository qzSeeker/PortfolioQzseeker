import { motion, useScroll, useSpring } from "framer-motion";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects/Projects";
import Page from "./Components/Qualifications/Page";
import Skills from "./Components/Skills";
import Hero from "./Components/Hero/Hero";
import Certifications from "./Components/Certificates/Certifications";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="bg-[#adc3eff1] fixed top-0 left-0 right-0 h-1" style={{ scaleX }}/>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <AboutMe />
        <Skills />
        <Page />
        <Certifications />
        <Projects />
        <Blogs />
        <Footer />
      </div>
    </>
  );
}

export default App;
