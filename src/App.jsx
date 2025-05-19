import "./App.modules.css";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
import { Project } from "./Components/Projects/Project";
import { Contact } from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />

    </div>
  );
}
export default App;
