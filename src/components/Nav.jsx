import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { setDarkMode, setLightMode } from '../redux/action';
import '../css/navbar.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const isDarkMode = useSelector((state) => state.counterReducer);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    if (isDarkMode) {
      dispatch(setLightMode());
    } else {
      dispatch(setDarkMode());
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="nav-content">
        <NavLink to="/" className="nav-logo">
          <span className="logo-text">KC</span>
        </NavLink>

        <div className="nav-controls">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Nav; 