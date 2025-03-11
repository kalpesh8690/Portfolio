import React, { useEffect, useRef } from 'react';
import '../css/experience.css';

const Experience = () => {
  const timelineRef = useRef(null);

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

    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      title: 'MERN Stack Developer',
      company: 'Brained.app',
      date: '2022 - Present',
      description: [
        'Developing and maintaining full-stack web applications using the MERN stack',
        'Implementing responsive designs and ensuring cross-browser compatibility',
        'Collaborating with team members using agile methodologies',
        'Optimizing application performance and implementing security best practices'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Material-UI']
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Ltd.',
      date: '2021 - 2022',
      description: [
        'Built responsive user interfaces using React.js and modern CSS',
        'Collaborated with senior developers to implement new features',
        'Participated in code reviews and team meetings',
        'Learned and applied best practices in web development'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      id: 3,
      title: 'Web Development Freelancer',
      company: 'Self-Employed',
      date: '2020 - 2021',
      description: [
        'Developed custom websites for various clients',
        'Managed client relationships and project timelines',
        'Implemented responsive designs and modern UI/UX practices',
        'Provided maintenance and support for existing websites'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'WordPress', 'PHP']
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-header animate-fade-down">
        <h1>Professional Experience</h1>
        <p>My journey in web development and software engineering</p>
      </div>

      <div className="timeline" ref={timelineRef}>
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-description">
                <ul>
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-tech">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;