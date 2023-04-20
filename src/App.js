import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
    </React.Fragment>
  );
}

export default App;
