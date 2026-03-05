import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
    </>
  );
}

export default App;
