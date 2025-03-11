import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  useMediaQuery,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { ThemeContext } from '../theme/context';
import { motion } from 'framer-motion';

const Contact = () => {
  const { theme } = React.useContext(ThemeContext);
  const isDarkMode = theme === 'dark-content';
  // const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      console.log('Form submitted:', formData);
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'kalpeshpatel.jobs@gmail.com',
      link: 'mailto:kalpeshpatel.jobs@gmail.com',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+1 (437) 981-1227',
      link: 'tel:+14379811227',
    },
    {
      icon: LocationIcon,
      label: 'Location',
      value: 'Toronto, ON, Canada',
      link: 'https://maps.google.com/?q=Toronto,ON',
    },
  ];

  const socialLinks = [
    {
      icon: GitHubIcon,
      label: 'GitHub',
      link: 'https://github.com/kalpesh-b-patel',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kalpesh-b-patel/',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            color: isDarkMode ? 'white' : 'text.primary',
            mb: 4,
          }}
        >
          Get in Touch
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: isDarkMode ? 'rgba(21, 21, 21, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: 1,
                borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              }}
            >
              <Stack spacing={4}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: isDarkMode ? 'white' : 'text.primary' }}
                >
                  Contact Information
                </Typography>

                <Stack spacing={3}>
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.label}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        component="a"
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textDecoration: 'none',
                          color: isDarkMode ? 'white' : 'text.primary',
                          '&:hover': { color: 'orange' },
                        }}
                      >
                        <info.icon color="inherit" />
                        <Box>
                          <Typography variant="subtitle2" color="orange">
                            {info.label}
                          </Typography>
                          <Typography>{info.value}</Typography>
                        </Box>
                      </Stack>
                    </motion.div>
                  ))}
                </Stack>

                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: isDarkMode ? 'white' : 'text.primary' }}
                  >
                    Follow Me
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((social) => (
                      <IconButton
                        key={social.label}
                        component="a"
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: isDarkMode ? 'white' : 'text.primary',
                          '&:hover': {
                            color: 'orange',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <social.icon />
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
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
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: isDarkMode ? 'white' : 'text.primary' }}
                  >
                    Send Message
                  </Typography>

                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        },
                      },
                      '& label': {
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& input': {
                        color: isDarkMode ? 'white' : 'text.primary',
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        },
                      },
                      '& label': {
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& input': {
                        color: isDarkMode ? 'white' : 'text.primary',
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        },
                      },
                      '& label': {
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& input': {
                        color: isDarkMode ? 'white' : 'text.primary',
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        },
                      },
                      '& label': {
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& textarea': {
                        color: isDarkMode ? 'white' : 'text.primary',
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      bgcolor: 'orange',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'darkorange',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
