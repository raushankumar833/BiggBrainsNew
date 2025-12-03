// AboutHero.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";

// Assuming these animations are defined somewhere in your project
const fadeSlideIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 6px 15px rgba(30, 144, 255, 0.5); }
  50% { box-shadow: 0 6px 25px rgba(30, 144, 255, 0.8); }
`;

const AboutHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 500, md: 650 },
        backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        px: { xs: 3, md: 10 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(63, 75, 88, 0.8) 40%, rgba(0, 0, 0, 0.6) 100%)",
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 600,
          animation: `${fadeSlideIn} 1.2s ease forwards`,
          color: "#fff",
          textShadow: "0 2px 10px rgba(0,0,0,0.7)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            fontSize: { xs: "2.8rem", md: "4rem" },
            letterSpacing: "0.1em",
            mt: { xs: "80px", md: "2px" },
            mb: 3,
            lineHeight: 1.1,
          }}
        >
          Who We Are
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 5,
            fontWeight: 500,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            lineHeight: 1.1,
            maxWidth: 520,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          We build innovative, scalable, and modern digital solutions that
          elevate businesses to new heights. Our team blends creativity,
          technology, and strategy to deliver exceptional experiences.
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #1e90ff, #00aaff)",
            padding: "5px 15px",
            fontSize: "1.1rem",
            fontWeight: 700,
            borderRadius: "50px",
            textTransform: "uppercase",
            boxShadow: "0 6px 15px rgba(30, 144, 255, 0.5)",
            animation: `${glow} 3s ease-in-out infinite`,
            transition: "transform 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #00aaff, #1e90ff)",
              transform: "scale(1.05)",
              boxShadow: "0 8px 25px rgba(30, 144, 255, 0.7)",
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default AboutHero;
