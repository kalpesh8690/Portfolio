import React from 'react';
import '../css/cv.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Kalpesh Chauhan</h1>
        <div className="title">MERN Stack Developer</div>
        <div className="cv-contact">
          <a href="mailto:kalpeshchauhan82@gmail.com">
            <FaEnvelope /> kalpeshchauhan82@gmail.com
          </a>
          <a href="tel:+1234567890">
            <FaPhone /> +91 1234567890
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </header>

      <section className="cv-section">
        <h2>Summary</h2>
        <p>
          Passionate MERN Stack Developer with experience in building scalable web applications.
          Currently working at Brained.app, focusing on developing innovative solutions and
          maintaining high-quality code standards.
        </p>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        <div className="cv-item">
          <h3>MERN Stack Developer</h3>
          <div className="subtitle">Brained.app</div>
          <div className="date">2022 - Present</div>
          <p>
            • Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js<br />
            • Implemented responsive designs and ensured cross-browser compatibility<br />
            • Collaborated with team members using agile methodologies<br />
            • Optimized application performance and implemented security best practices
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-item">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <div className="subtitle">Maharaja Krishnakumarsinhji Bhavnagar University</div>
          <div className="date">2019 - 2022</div>
          <p>
            Focused on computer science fundamentals, web development, and software engineering principles.
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">Express.js</div>
          <div className="skill-item">React.js</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">JavaScript (ES6+)</div>
          <div className="skill-item">TypeScript</div>
          <div className="skill-item">HTML5</div>
          <div className="skill-item">CSS3</div>
          <div className="skill-item">Git</div>
          <div className="skill-item">RESTful APIs</div>
          <div className="skill-item">Redux</div>
          <div className="skill-item">Material-UI</div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Projects</h2>
        <div className="cv-item">
          <h3>Portfolio Website</h3>
          <div className="subtitle">Personal Project</div>
          <div className="date">2023</div>
          <p>
            • Built a responsive portfolio website using React and Material-UI<br />
            • Implemented dark mode functionality using Redux and Context API<br />
            • Created reusable components and maintained clean code architecture
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Certifications</h2>
        <div className="cv-item">
          <h3>MERN Stack Development</h3>
          <div className="subtitle">Udemy</div>
          <div className="date">2022</div>
        </div>
      </section>
    </div>
  );
};

export default CV; 