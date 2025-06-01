import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="bg-prussian-blue min-h-screen bg-shit">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default App;
