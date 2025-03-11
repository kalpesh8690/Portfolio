import React, { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaReact, 
  FaNodeJs, FaDocker, FaGitAlt, FaAws, 
  FaGraduationCap, FaDownload, FaArrowRight, FaCode,
  FaBriefcase, FaLaptopCode
} from 'react-icons/fa';
import { 
  SiTypescript, SiExpress, SiMongodb, SiPostgresql, 
  SiJest, SiTailwindcss, SiNextdotjs, SiRedux 
} from 'react-icons/si';
import { ThemeContext } from '../theme/context';
import "../css/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typingRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const roles = [
      'Full Stack Developer',
      'Frontend Specialist',
      'UI/UX Enthusiast',
      'Problem Solver'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        // Typing text
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      // Speed control
      let typingSpeed = isDeleting ? 50 : 150;

      // Check if completed typing current role
      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of word
        isDeleting = true;
        typingSpeed = 2000; // Wait before starting to delete
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Wait before typing next word
      }

      timer = setTimeout(typeEffect, typingSpeed);
    };

    timer = setTimeout(typeEffect, 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const navigation = {
    contact: () => navigate('/contact'),
    cv: () => navigate('/cv'),
    education: () => navigate('/education'),
    projects: () => navigate('/projects')
  };

  const personalInfo = {
    name: "Kalpesh Chauhan",
    title: "Full Stack Developer",
    company: {
      name: "Brained.app",
      url: "https://brained.app/",
      role: "Full Stack Developer"
    },
    social: {
      github: "https://github.com/kalpesh8690",
      linkedin: "https://www.linkedin.com/in/kalpesh-chauhan-07632b194/",
      email: "kalpeshchauhan8690@gmail.com"
    }
  };

  const stats = [
    { icon: FaBriefcase, value: "2+", label: "Years Experience" },
    { icon: FaLaptopCode, value: "20+", label: "Projects Completed" },
    { icon: FaCode, value: "15+", label: "Happy Clients" }
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { Icon: FaReact, name: "React.js", level: "Advanced" },
        { Icon: SiNextdotjs, name: "Next.js", level: "Intermediate" },
        { Icon: SiTypescript, name: "TypeScript", level: "Intermediate" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", level: "Advanced" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { Icon: FaNodeJs, name: "Node.js", level: "Advanced" },
        { Icon: SiExpress, name: "Express.js", level: "Advanced" },
        { Icon: SiMongodb, name: "MongoDB", level: "Advanced" },
        { Icon: SiPostgresql, name: "PostgreSQL", level: "Intermediate" }
      ]
    },
    {
      category: "Tools & DevOps",
      items: [
        { Icon: FaGitAlt, name: "Git", level: "Advanced" },
        { Icon: FaDocker, name: "Docker", level: "Intermediate" },
        { Icon: SiJest, name: "Jest", level: "Intermediate" },
        { Icon: FaAws, name: "AWS", level: "Basic" }
      ]
    }
  ];

  return (
    <div className={`home-container ${isVisible ? 'fade-in' : ''} ${theme}`}>
      {/* Hero Section */}
      <div className="hero-div">
        <div className="hero-content">
          <div className="text-content">
            <div className="intro-text">
              <h2 className="greeting">
                <span className="wave">👋</span> Hello, I'm
              </h2>
              <h1 className="name">{personalInfo.name}</h1>
              <div className="role-wrapper">
                <span className="role">{displayText}</span>
                <span className="cursor">|</span>
              </div>
            </div>
            <p className="intro">
              Passionate about crafting exceptional digital experiences through clean code and innovative solutions. 
              Specializing in full-stack development with a focus on modern web technologies.
            </p>
            <div className="cta-group">
              <div className="social-links">
                <a 
                  href={personalInfo.social.github}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a 
                  href={personalInfo.social.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href={`mailto:${personalInfo.social.email}`}
                  className="social-icon"
                  aria-label="Email Contact"
                >
                  <FaEnvelope />
                </a>
              </div>
              <div className="action-buttons">
                <button 
                  onClick={navigation.contact} 
                  className="primary-button"
                >
                  Let's Connect <FaArrowRight />
                </button>
                <button 
                  onClick={navigation.cv} 
                  className="secondary-button"
                >
                  <FaDownload /> Resume
                </button>
                <button 
                  onClick={navigation.education} 
                  className="secondary-button"
                >
                  <FaGraduationCap /> Education
                </button>
              </div>
            </div>
          </div>
          <div className="profile-div">
            <div className="profile-image-container">
              <img 
                src="/mypic.png" 
                alt={personalInfo.name} 
                className="profile-image" 
                loading="lazy"
              />
              <div className="background-shape"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience div */}
      <div className="experience-highlight">
        <div className="current-role">
          <h3>Currently Building Amazing Things At</h3>
          <a 
            href={personalInfo.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
            aria-label={`Current Company - ${personalInfo.company.name}`}
          >
            <img 
              src="/brained.png" 
              alt={`${personalInfo.company.name} Logo`} 
              className="company-logo" 
              loading="lazy"
            />
          </a>
          <p className="role-title">{personalInfo.company.role}</p>
        </div>
        <div className="achievements">
          {stats.map((stat, index) => (
            <div key={index} className="achievement-card">
              <stat.icon className="achievement-icon" />
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills div */}
      <div className="skills-div">
        <h2>
          <FaCode className="div-icon" />
          Technical Expertise
        </h2>
        <div className="skills-container">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-grid">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <skill.Icon className="skill-icon" />
                    <h4>{skill.name}</h4>
                    <div className="skill-level">
                      <span className={`level-indicator ${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA div */}
      <div className="cta-div">
        <div className="cta-content">
          <h2>Let's Create Something Amazing Together</h2>
          <p>Ready to bring your ideas to life? Let's collaborate and build something extraordinary.</p>
          <div className="cta-buttons">
            <button 
              onClick={navigation.projects} 
              className="primary-button"
              aria-label="View My Projects"
            >
              View Projects <FaArrowRight className="button-icon" />
            </button>
            <button 
              onClick={navigation.contact} 
              className="secondary-button"
              aria-label="Contact Me"
            >
              Get in Touch <FaEnvelope className="button-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;