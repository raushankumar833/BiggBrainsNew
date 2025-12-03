import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Contact Us", path: "/contact" },
    { label: "Join BiggBrains", path: "/join-us" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const drawerContent = () => {
    const location = useLocation(); // Get current path

    return (
      <Box
        sx={{
          width: { xs: "80vw", sm: 300 },
          height: "100%",
          background: "#fcf9ff",
          color: "white",
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Box
            component="img"
            src="/src/assets/BiggBrainsLogo.svg"
            alt="logo"
            sx={{ height: 66, ml: 1 }}
          />
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "black" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Navigation Items */}
        <List sx={{ mt: 2 }}>
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path; 
            return (
              <ListItem
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  cursor: "pointer",
                  backgroundColor: isActive ? "#cce4ff" : "transparent", 
                  borderRadius: isActive ? 4 : 0,
                  "&:hover": {
                    backgroundColor: isActive ? "#cce4ff" : "#e8f2fc",
                    borderRadius: isActive ? 4 : 4,
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: isActive ? "#003366" : "black", 
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            );
          })}
        </List>

        {/* Login Button */}
        <Box sx={{ p: 2, mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#0c3b78",
              color: "#fff",
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              py: 1,
              "&:hover": { backgroundColor: "#072d5e" },
            }}
            onClick={() => handleNavigation("/login")}
          >
            Login Now
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(255,255,255,0.8)", 
        py: { xs: 0.5, md: 1 },
        backdropFilter: "blur(5px)",
      }}
      elevation={0} 
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/src/assets/BiggBrainsLogo.svg"
            alt="logo"
            sx={{
              height: { xs: 50, sm: 55, md: 75 },
              ml: { xs: 1.6, md: 5 },
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* Desktop Navigation */}
        <Stack
          direction="row"
          spacing={{ md: 3, lg: 4 }}
          sx={{
            alignItems: "center",
            display: { xs: "none", md: "flex" },
          }}
        >
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Box
                key={item.label}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => navigate(item.path)}
              >
                <Typography
                  sx={{
                    color: isActive ? "#105ec4" : "#000", // active blue, else black
                    fontWeight: isActive ? 600 : 500,
                    fontSize: { md: "0.95rem", lg: "1rem" },
                    transition: "color 0.3s",
                    "&:hover": { color: "#ed1874" },
                  }}
                >
                  {item.label}
                </Typography>
                {isActive && (
                  <Box
                    sx={{
                      width: "100%",
                      height: 3,
                      backgroundColor: "#ed1874", 
                      borderRadius: 2,
                      mt: 0.5,
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Stack>

        {/* Desktop Button */}
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #1a1333, #0c345f)",
            borderRadius: 2,
            textTransform: "none",
            px: { md: 2.5, lg: 3 },
            py: 1,
            ml: 3,
            fontWeight: 600,
            display: { xs: "none", md: "block" },
            "&:hover": { backgroundColor: "#6925c7" },
          }}
          onClick={() => navigate("/login")}
        >
          Get Portfolio
        </Button>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#7C2EE5",
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ fontSize: 36 }} />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent()}
      </Drawer>
    </AppBar>
  );
}
