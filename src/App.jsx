import "./App.css";
import AboutMe from "./Components/AboutMe";
import Blogs from "./Components/Blogs";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Blogs />
      </div>
    </>
  );
}

export default App;
