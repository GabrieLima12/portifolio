import { useState } from "react";
import AboutMe from "./components/about-me";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function App() {

  const [darkMode, setDarkMode] = useState<boolean>(true);

  function changeToDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <main className={`${darkMode && "dark"} font-poppins`}>
      <NavBar onChange={changeToDarkMode} darkMode={darkMode} />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  )
}
