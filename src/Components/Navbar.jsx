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
    { label: "Join BiggBrains", path: "/join-us" }
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

  const drawerContent = () => (
    <Box
      sx={{
        width: 250,
        height: "100%",
        background: "linear-gradient(180deg, #5A0FC8, #480DC6)",
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
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Box
          component="img"
          src="/src/assets/logop2p.png"
          alt="logo"
          sx={{
            height: 35,
          }}
        />
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ color: "white" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <List sx={{ mt: 2 }}>
        {navigationItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => handleNavigation(item.path)}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiListItemText-primary": {
                  color: "white",
                  fontWeight: 500,
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Login Button in Drawer */}
      <Box sx={{ p: 2, mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#7C2EE5",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            py: 1,
            "&:hover": { backgroundColor: "#6925c7" },
          }}
          onClick={() => handleNavigation("/login")}
        >
          Login Now
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(90deg, #5A0FC8, #480DC6)",
        py: 1,
      }}
      elevation={0}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/src/assets/logop2p.png"
            alt="logo"
            sx={{
              height: 40,
              mr: 1,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* Desktop Navigation */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
            mr: 3,
            display: { xs: "none", md: "flex" },
          }}
        >
          {navigationItems.map((item) => (
            <Typography
              key={item.label}
              variant="body1"
              sx={{
                color: "white",
                cursor: "pointer",
                fontWeight: 500,
                "&:hover": { opacity: 0.8 },
              }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        {/* Desktop Login Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7C2EE5",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            display: { xs: "none", md: "block" },
            "&:hover": { backgroundColor: "#6925c7" },
          }}
          onClick={() => navigate("/login")}
        >
          Login Now
        </Button>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            color: "white",
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
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