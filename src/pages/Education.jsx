import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import "../css/edu.css";
import {
  Pen,
  Book,
  AwardFill,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";

const Education = () => {
  const timelineRef = useRef(null);
  const mode = useSelector((state) => state.counterReducer, shallowEqual);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const CertMore = () => {
    navigate("/cert");
  };

  const educationData = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Gujarat Technological University",
      location: "Ahmedabad, Gujarat",
      duration: "2019 - 2023",
      description: "Completed B.E. in Information Technology with a focus on web development, database management, and software engineering principles.",
      achievements: [
        "Maintained a CGPA of 8.5 throughout the program",
        "Led the college's web development team",
        "Completed multiple projects using MERN stack",
        "Participated in various hackathons and coding competitions"
      ]
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Gujarat Secondary Education Board",
      location: "Ahmedabad, Gujarat",
      duration: "2017 - 2019",
      description: "Completed HSC with Science stream, focusing on Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills.",
      achievements: [
        "Scored 85% in board examinations",
        "Active participant in science exhibitions",
        "Won first prize in state-level coding competition",
        "Member of school's science club"
      ]
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Gujarat Secondary Education Board",
      location: "Ahmedabad, Gujarat",
      duration: "2016 - 2017",
      description: "Completed SSC with distinction, laying the foundation for further technical education. Developed strong fundamentals in mathematics and sciences.",
      achievements: [
        "Scored 92% in board examinations",
        "School topper in Mathematics and Science",
        "Received merit scholarship",
        "Active participant in academic competitions"
      ]
    }
  ];

  return (
    <div className="education-container">
      <header className="education-header">
        <h1>Education <span className="highlight">Journey</span></h1>
        <p>My academic background and achievements that shaped my career path</p>
      </header>

      <div className="timeline" ref={timelineRef}>
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h2>{edu.degree}</h2>
              <h3>{edu.institution}</h3>
              <div className="timeline-info">
                <span>
                  <FaCalendarAlt /> {edu.duration}
                </span>
                <span>
                  <FaMapMarkerAlt /> {edu.location}
                </span>
              </div>
              <p>{edu.description}</p>
              <div className="achievements">
                <h4>
                  <FaTrophy style={{ marginRight: '8px', color: '#FF4500' }} />
                  Key Achievements
                </h4>
                <ul>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
