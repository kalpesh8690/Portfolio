import React, { useEffect, useState } from "react";
import Hero from "./component/Hero";
import Skill from "./pages/Skill";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import {Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Certificate from "./pages/Certificate";
import "./App.css";
import CV from "./pages/CV";
import Home from "./pages/Home";
import ThemeContextWrapper from "./theme/ThemeContextWrapper";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeContextWrapper>
      <Routes>
            <Route path="/" element={<Hero />}>
              <Route path="/skill" element={<Skill />} />
              <Route path="/education" element={<Education />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/cert" element={<Certificate />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
    </ThemeContextWrapper>
  );
}

export default App;