import './App.css'
import AboutMe from './Components/AboutMe'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      </div>
    </>
  )
}

export default App
