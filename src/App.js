import React from "react";
import Hero from "./component/Hero";
import Skill from "./pages/Skill";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Certificate from "./pages/Certificate";
import "./App.css";
import { useEffect, useState } from "react";
import CV from "./pages/CV";
import LoadingScreen from 'react-loading-screen'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
        {loading ? (
          <LoadingScreen
          loading={true}
          bgColor='#f1f1f1'
          spinnerColor='#9ee5f8'
          textColor='#676767'
          logoSrc='/logo512.png'
          text='Loading...'
        > 
        </LoadingScreen>
        ) : (
          <Routes>
            <Route excat path="/" element={<Hero />}>
              <Route path="/skill" element={<Skill />} />
              <Route path="/education" element={<Education />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/cert" element={<Certificate />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        )}
    </>
  );
}

export default App;
