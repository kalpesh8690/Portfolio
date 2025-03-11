import React from 'react';
import '../css/certificate.css';
import { FaExternalLinkAlt, FaAward, FaCalendar } from 'react-icons/fa';

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: 'MERN Stack Development',
      issuer: 'Udemy',
      date: 'December 2022',
      image: '/certificates/mern-stack.jpg',
      description: 'Comprehensive course covering MongoDB, Express.js, React.js, and Node.js development with practical projects and best practices.',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API'],
      link: 'https://www.udemy.com/certificate/your-cert-id'
    },
    {
      id: 2,
      title: 'Advanced React & Redux',
      issuer: 'Coursera',
      date: 'August 2022',
      image: '/certificates/react-redux.jpg',
      description: 'Advanced concepts in React including Hooks, Context API, Redux, and modern state management patterns.',
      skills: ['React.js', 'Redux', 'Context API', 'React Hooks'],
      link: 'https://www.coursera.org/certificate/your-cert-id'
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      issuer: 'freeCodeCamp',
      date: 'March 2022',
      image: '/certificates/web-dev.jpg',
      description: 'Full-stack web development covering HTML, CSS, JavaScript, and modern web development tools and practices.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      link: 'https://www.freecodecamp.org/certification/your-username'
    },
    {
      id: 4,
      title: 'UI/UX Design Fundamentals',
      issuer: 'Google',
      date: 'January 2022',
      image: '/certificates/ui-ux.jpg',
      description: 'Comprehensive training in user interface and user experience design principles and best practices.',
      skills: ['UI Design', 'UX Design', 'Figma', 'Prototyping'],
      link: 'https://www.google.com/certificates/your-cert-id'
    }
  ];

  return (
    <div className="certificate-container">
      <div className="certificate-header">
        <h1>Certifications</h1>
        <p>Professional certifications and achievements in web development and design</p>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="certificate-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x200?text=Certificate';
              }}
            />
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <div className="certificate-issuer">
                <FaAward />
                {cert.issuer}
              </div>
              <div className="certificate-date">
                <FaCalendar style={{ marginRight: '0.5rem' }} />
                {cert.date}
              </div>
              <p className="certificate-description">{cert.description}</p>
              <div className="certificate-skills">
                {cert.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="certificate-link"
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;