import "./App.css";
import AboutMe from "./Components/AboutMe";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects/Projects";
import Page from "./Components/Qualifications/Page";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <AboutMe />
        <Skills />
        <Page />
        <Projects />
        <Blogs />
        <Footer />
      </div>
    </>
  );
}

export default App;
