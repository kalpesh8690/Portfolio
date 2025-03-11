import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Button,
  LinearProgress,
} from '@mui/material';
import {
  Work as WorkIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Download as DownloadIcon,
  DateRange as DateIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { ThemeContext } from '../theme/context';
import { motion } from 'framer-motion';
import './CV.css';

const CV = () => {
  const { theme } = React.useContext(ThemeContext);
  const isDarkMode = theme === 'dark-content';

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Toronto, ON",
      period: "2023 - Present",
      description: [
        "Developed and maintained web applications using React, Node.js, and MongoDB",
        "Implemented responsive designs and modern UI/UX practices",
        "Collaborated with clients to gather requirements and deliver solutions",
      ],
    },
    {
      title: "Software Developer",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      period: "2019 - 2022",
      description: [
        "Led development of enterprise applications using Java and Spring Boot",
        "Optimized database queries and improved application performance",
        "Mentored junior developers and conducted code reviews",
      ],
    },
  ];

  const education = [
    {
      degree: "Post Graduate Certificate in Web Development",
      school: "Humber College",
      location: "Toronto, ON",
      period: "2022 - 2023",
      gpa: "3.8/4.0",
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Gujarat Technological University",
      location: "Gujarat, India",
      period: "2015 - 2019",
      gpa: "8.54/10",
    },
  ];

  const skills = {
    "Frontend Development": [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Material-UI", level: 85 },
    ],
    "Backend Development": [
      { name: "Node.js", level: 80 },
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "RESTful APIs", level: 85 },
    ],
    "Database & Tools": [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
    ],
  };

  const handleDownloadCV = () => {
    const cvUrl = '/resume.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="cv-container"
      >
        {/* Header */}
        <Box className="cv-header" sx={{ mb: 6 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                color: isDarkMode ? 'white' : 'text.primary',
              }}
            >
              Curriculum Vitae
            </Typography>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadCV}
              className="download-btn"
              sx={{
                bgcolor: 'orange',
                color: 'white',
                '&:hover': {
                  bgcolor: 'darkorange',
                },
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Box>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {/* Experience */}
            <Box className="cv-section">
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: isDarkMode ? 'rgba(21, 21, 21, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: 1,
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  mb: 4,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: isDarkMode ? 'white' : 'text.primary',
                    mb: 3,
                  }}
                >
                  <WorkIcon sx={{ color: 'orange' }} />
                  Professional Experience
                </Typography>

                <Stack spacing={4}>
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Typography variant="h6" color={isDarkMode ? 'white' : 'text.primary'}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" color="orange" gutterBottom>
                        {exp.company}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ mb: 2, color: isDarkMode ? 'grey.400' : 'text.secondary' }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <DateIcon fontSize="small" />
                          <Typography variant="body2">{exp.period}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LocationIcon fontSize="small" />
                          <Typography variant="body2">{exp.location}</Typography>
                        </Box>
                      </Stack>
                      <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                        {exp.description.map((item, i) => (
                          <li key={i}>
                            <Typography
                              variant="body2"
                              color={isDarkMode ? 'grey.300' : 'text.secondary'}
                              paragraph
                            >
                              {item}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </Stack>
              </Paper>

              {/* Education */}
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: isDarkMode ? 'rgba(21, 21, 21, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: 1,
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: isDarkMode ? 'white' : 'text.primary',
                    mb: 3,
                  }}
                >
                  <SchoolIcon sx={{ color: 'orange' }} />
                  Education
                </Typography>

                <Stack spacing={4}>
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Typography variant="h6" color={isDarkMode ? 'white' : 'text.primary'}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="subtitle1" color="orange" gutterBottom>
                        {edu.school}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ color: isDarkMode ? 'grey.400' : 'text.secondary' }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <DateIcon fontSize="small" />
                          <Typography variant="body2">{edu.period}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LocationIcon fontSize="small" />
                          <Typography variant="body2">{edu.location}</Typography>
                        </Box>
                      </Stack>
                      <Typography
                        variant="body2"
                        color={isDarkMode ? 'grey.300' : 'text.secondary'}
                        sx={{ mt: 1 }}
                      >
                        GPA: {edu.gpa}
                      </Typography>
                    </motion.div>
                  ))}
                </Stack>
              </Paper>
            </Box>
          </Grid>

          {/* Skills Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: isDarkMode ? 'rgba(21, 21, 21, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: 1,
                borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: isDarkMode ? 'white' : 'text.primary',
                  mb: 4,
                }}
              >
                <CodeIcon sx={{ color: 'orange' }} />
                Technical Skills
              </Typography>

              <Stack spacing={4}>
                {Object.entries(skills).map(([category, categorySkills], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="skill-category"
                  >
                    <Typography
                      variant="h6"
                      color={isDarkMode ? 'white' : 'text.primary'}
                      gutterBottom
                    >
                      {category}
                    </Typography>
                    <Stack spacing={2}>
                      {categorySkills.map((skill, i) => (
                        <Box key={i}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ mb: 1 }}
                          >
                            <Typography
                              variant="body2"
                              color={isDarkMode ? 'grey.300' : 'text.secondary'}
                            >
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="orange">
                              {skill.level}%
                            </Typography>
                          </Stack>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 6,
                              borderRadius: 1,
                              bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                              '& .MuiLinearProgress-bar': {
                                bgcolor: 'orange',
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default CV; 