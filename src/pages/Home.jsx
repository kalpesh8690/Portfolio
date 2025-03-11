import React from "react";
import { useNavigate } from "react-router-dom";
import "animate.css/animate.min.css";
import "../css/home.css";

function Home() {
  const navigate = useNavigate();

  // Function to navigate to the CV page
  const goToCv = () => {
    navigate("/cv");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="home-body">
        <div className="desc-main">
          <p className="p-desc1">Hello</p>
          <div className="my-name">
            <h1 className="h1-desc">I AM </h1>
            <h1 data-text=" KALPESH" className="kalpesh-name">
              {" "}
              KALPESH CHAUHAN
            </h1>
          </div>
          <div className="job-positon">
            <p className="p-desc2">MERN STACK DEVELOPER AT</p>
            <a href="https://brained.app/" target="_blank" rel="noopener noreferrer">
              <img className="brained-logo" src="./brained.png" alt="Brained Logo" />
            </a>
          </div>
          <div className="home-btns">
            <button 
              onClick={goToContact}
              className="primary-button"
            >
              Contact Me
            </button>
            <button
              onClick={goToCv}
              className="secondary-button"
            >
              My CV
            </button>
          </div>
        </div>
        <div className="shadow">
          <img className="my-img" alt="kalpesh-pic" src="mypic.png" />
        </div>
      </div>
      <div className="about-us-main">
        <div className="about-us-img">
          <img className="about-img" alt="about-pic" src="about-us.png" />
        </div>
        <div className="about-us-detail">
          <h1 className="mt-2">LET'S INTRODUCE ABOUT MYSELF</h1>
          <p className="mt-20">
            Whose given. Were gathered. There first subdue greater. Bearing you
            Whales heaven midst their. Beast creepeth. Fish days.<br />
            Give may shall likeness made yielding spirit a itself together created
            after sea is in beast beginning signs open god you're gathering
            whose gathered cattle let. Creature whales fruit unto meat the life
            beginning all in under give two.
          </p>
          <div className="cv-link-con">
            <a 
              className="primary-button" 
              href="https://rxresu.me/r/IQOBH0AC" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;