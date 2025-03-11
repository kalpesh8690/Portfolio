import React, { useEffect, useRef } from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { SiWebpack, SiDocker } from 'react-icons/si';
import { Instagram, LinkedIn, Facebook, WhatsApp, GitHub } from '@mui/icons-material';
import '../css/about.css';

const About = () => {
  const sectionsRef = useRef([]);

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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const skills = [
    {
      category: "Frontend Development",
      icon: <FaLaptopCode />,
      items: ["React.js", "Next.js", "TypeScript", "Redux", "Material-UI", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      icon: <FaServer />,
      items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "WebSocket"]
    },
    {
      category: "Database",
      icon: <FaDatabase />,
      items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      category: "DevOps & Tools",
      icon: <FaTools />,
      items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
    }
  ];

  const interests = [
    {
      title: "Web Development",
      icon: <FaCode />,
      description: "Building modern, responsive web applications with cutting-edge technologies."
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt />,
      description: "Creating cross-platform mobile applications using React Native."
    },
    {
      title: "System Architecture",
      icon: <SiWebpack />,
      description: "Designing scalable and maintainable software architectures."
    },
    {
      title: "Cloud Technologies",
      icon: <SiDocker />,
      description: "Working with cloud platforms and containerization technologies."
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram sx={{ color: 'rgb(255, 0, 149)' }} />,
      url: 'https://www.instagram.com/mrk._09/',
      label: 'Instagram'
    },
    {
      icon: <GitHub sx={{ color: '#333' }} />,
      url: 'https://github.com/kalpesh8690',
      label: 'GitHub'
    },
    {
      icon: <LinkedIn sx={{ color: 'rgb(17, 0, 124)' }} />,
      url: 'https://www.linkedin.com/in/kalpesh-chauhan-07632b194/',
      label: 'LinkedIn'
    },
    {
      icon: <Facebook sx={{ color: 'rgb(24, 119, 242)' }} />,
      url: 'https://www.facebook.com/chauhan.kalpesh.1023',
      label: 'Facebook'
    },
    {
      icon: <WhatsApp sx={{ color: 'rgb(37, 211, 102)' }} />,
      url: 'https://api.whatsapp.com/send?phone=918690361133&text=Hello%20Kalpesh',
      label: 'WhatsApp'
    }
  ];

  return (
    <div className="about-container">
      {/* Introduction Section */}
      <section className="about-intro" ref={addToRefs}>
        <div className="intro-content">
          <h1>About <span className="highlight">ME</span></h1>
          <p className="intro-text">
            I help agencies & brands to turn their ideas into designs. 
            My heart is creativity and design and my head has always been business led. 
            With expertise in the MERN stack, I'm dedicated to creating efficient and 
            user-friendly web applications that make a difference.
          </p>
        </div>
        <div className="intro-image">
          <img src="/mypic.png" alt="Profile" />
          <div className="image-shape"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" ref={addToRefs}>
        <h2>Technical <span className="highlight">Expertise</span></h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <div className="skill-header">
                {skillGroup.icon}
                <h3>{skillGroup.category}</h3>
              </div>
              <ul className="skill-list">
                {skillGroup.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section" ref={addToRefs}>
        <h2>Areas of <span className="highlight">Interest</span></h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div className="interest-icon">
                {interest.icon}
              </div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Section */}
      <section className="personal-section" ref={addToRefs}>
        <h2>Personal <span className="highlight">Journey</span></h2>
        <div className="journey-content">
          <p>
            My journey in web development began with a curiosity about how websites work.
            This curiosity evolved into a passion for creating digital experiences that make
            a difference. I believe in continuous learning and staying updated with the
            latest technologies and best practices in the field.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source projects, or sharing my knowledge with the developer community.
            I'm always excited about taking on new challenges and working on innovative projects.
          </p>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="social-section" ref={addToRefs}>
        <h2>Social <span className="highlight">Links</span></h2>
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;