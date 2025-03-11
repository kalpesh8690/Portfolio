import React, { useState,useEffect } from "react";
import Education from "../pages/Education";
import Skill from "../pages/Skill";
import Home from "../pages/Home";
import About from "../pages/About";
import '../App.css';

function Hero() {
  return (
    <>
        <Home/>
        {/* <Skill/>
        <Education/> */}
        <About/>  
    </>
  );
}

export default Hero;
