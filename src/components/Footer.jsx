import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
  useTheme,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Copyright as CopyrightIcon,
} from '@mui/icons-material';
import { ThemeContext } from '../theme/context';

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);
  const isDarkMode = theme === 'dark-content';
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com/kalpesh8690',
    },
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/kalpesh8690/',
    },
    {
      name: 'Email',
      icon: EmailIcon,
      url: 'mailto:chauhankalpesh760@gmail.com',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: isDarkMode ? 'rgba(21, 21, 21, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: 1,
        borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body2"
            color={isDarkMode ? 'white' : 'text.primary'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <CopyrightIcon fontSize="small" />
            {currentYear} Kalpesh Chauhan. All rights reserved.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }}
              />
            }
          >
            {socialLinks.map((link) => (
              <IconButton
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                sx={{
                  color: isDarkMode ? 'white' : 'text.primary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'orange',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <link.icon />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 