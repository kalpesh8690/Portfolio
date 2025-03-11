import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Button,
  Fade,
  Stack,
  Avatar,
  Tooltip,
  useScrollTrigger
} from "@mui/material";
import {
  Menu as MenuIcon,
  LaptopMac,
  Home,
  Work,
  School,
  EmojiEvents,
  Person,
  Mail,
} from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext, themes } from "../theme/context";
import DarkModeToggle from "react-dark-mode-toggle";
import "./Nav.css";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Fade appear={false} in={!trigger}>
      {children}
    </Fade>
  );
};

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { theme, changeTheme } = React.useContext(ThemeContext);
  const location = useLocation();
  const isDarkMode = theme === 'dark-content';

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/experience", label: "Experience", icon: Work },
    { path: "/education", label: "Education", icon: School },
    { path: "/cert", label: "Certificates", icon: EmojiEvents },
    { path: "/about", label: "About Me", icon: Person },
    { path: "/contact", label: "Contact", icon: Mail }
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleThemeChange = () => {
    changeTheme(isDarkMode ? themes.light : themes.dark);
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: isDarkMode ? 'rgba(21, 34, 56, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: 1,
          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Logo */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", mr: 4 }}>
              <Typography
                variant="h5"
                component={NavLink}
                to="/"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 900,
                  letterSpacing: ".2rem",
                  color: "orange",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": {
                    color: "orange",
                    "& .logo-icon": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <LaptopMac 
                  className="logo-icon"
                  sx={{ 
                    color: isDarkMode ? "#FFFFFF" : "#121212",
                    transition: "transform 0.3s ease",
                  }} 
                />
                KALPESH
              </Typography>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                sx={{
                  color: isDarkMode ? "#FFFFFF" : "#121212",
                  "&:hover": {
                    bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiPaper-root": {
                    bgcolor: isDarkMode ? "rgba(21, 34, 56, 0.98)" : "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 2,
                    mt: 1.5,
                    border: 1,
                    borderColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  },
                }}
                TransitionComponent={Fade}
              >
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <MenuItem
                      key={link.path}
                      component={NavLink}
                      to={link.path}
                      onClick={handleCloseNavMenu}
                      sx={{
                        borderRadius: 1,
                        mx: 1,
                        color: isDarkMode ? "#FFFFFF" : "#121212",
                        "&.active": {
                          bgcolor: "rgba(255, 69, 0, 0.1)",
                          color: "orange",
                        },
                        "&:hover": {
                          bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Icon fontSize="small" />
                        <Typography>{link.label}</Typography>
                      </Stack>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>

            {/* Mobile Logo */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
              <Typography
                variant="h6"
                component={NavLink}
                to="/"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 900,
                  letterSpacing: ".2rem",
                  color: "orange",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <LaptopMac sx={{ color: isDarkMode ? "#FFFFFF" : "#121212" }} />
                KALPESH
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box 
              sx={{ 
                flexGrow: 1, 
                display: { xs: "none", md: "flex" }, 
                justifyContent: "center",
                gap: 1
              }}
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.path}
                    component={NavLink}
                    to={link.path}
                    startIcon={<Icon />}
                    sx={{
                      color: isDarkMode ? "#FFFFFF" : "#121212",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      textTransform: "none",
                      fontSize: "1rem",
                      "&.active": {
                        bgcolor: "rgba(255, 69, 0, 0.1)",
                        color: "orange",
                        "& .MuiSvgIcon-root": {
                          color: "orange",
                        },
                      },
                      "&:hover": {
                        bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>

            {/* Theme Toggle */}
            <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
              <DarkModeToggle
                onChange={handleThemeChange}
                checked={isDarkMode}
                size={50}
                speed={2}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Nav; 