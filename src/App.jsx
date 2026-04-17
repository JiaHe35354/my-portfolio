import "./styles/main.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
