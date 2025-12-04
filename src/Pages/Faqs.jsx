import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Stack,
  TextField,
  Typography,
  Fade,
  Grow,
  Zoom,
  IconButton,
  InputAdornment,
  Paper,
  alpha
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import bgImage from "../assets/faq.jpg";
import FAQSection from "../Components/FAQSection";
import ConnectUs from "../Components/ConnectUs";

const Faqs = () => {
  useEffect(() => {
    document.title = "Frequently Asked Questions | BiggBrains";
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredLetter, setHoveredLetter] = useState(null);

  // Split text for animation
//   const titleLine1 = "How";
  const titleLine2 = "How can we help you?";

  // Animation effect for letters
  useEffect(() => {
    const letters = document.querySelectorAll(".animated-letter");
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.05}s`;
    });
  }, []);

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        width: "100%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 30% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)",
          zIndex: 1,
        }
      }}
    >
      {/* Animated floating particles */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {[...Array(15)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
            
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0) translateX(0)" },
                "50%": { transform: `translateY(${Math.random() * 50 - 25}px) translateX(${Math.random() * 50 - 25}px)` },
              },
            }}
          />
        ))}
      </Box>

      <Container 
        maxWidth="lg" 
        sx={{ 
          position: "relative", 
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Heading Section with enhanced animations */}
        <Box sx={{ textAlign: "center", color: "#fff", mb: 6, width: "100%" }}>
          <Grow in={true} timeout={1000}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "48px", md: "72px", lg: "96px" },
                fontWeight: 900,
                letterSpacing: "-0.02em",
                mb: 1,
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                fontFamily: "'Inter', 'Roboto', sans-serif",
                background: "linear-gradient(135deg, #fff 0%, #a0a0a0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {/* Animated "How" */}
              <Box
                component="span"
                sx={{
                  display: "inline-flex",
                  justifyContent: "center",
                }}
              >
                {/* {titleLine1.split("").map((char, index) => (
                  <Box
                    key={index}
                    className="animated-letter"
                    onMouseEnter={() => setHoveredLetter(`${char}-${index}`)}
                    onMouseLeave={() => setHoveredLetter(null)}
                    sx={{
                      display: "inline-block",
                      animation: `bounceIn 0.6s ${index * 0.1}s both`,
                      transformOrigin: "center bottom",
                      transition: "all 0.3s ease",
                      transform: hoveredLetter === `${char}-${index}` 
                        ? "translateY(-10px) scale(1.2)" 
                        : "translateY(0) scale(1)",
                      "@keyframes bounceIn": {
                        "0%": {
                          opacity: 0,
                          transform: "translateY(30px) scale(0.8)",
                        },
                        "50%": {
                          transform: "translateY(-10px) scale(1.1)",
                        },
                        "100%": {
                          opacity: 1,
                          transform: "translateY(0) scale(1)",
                        },
                      },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </Box>
                ))} */}
              </Box>
            </Typography>
          </Grow>

          {/* Animated "can we help you?" */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0.5, sm: 1.5 }}
            justifyContent="center"
            alignItems="center"
            sx={{
              mt: 2,
              flexWrap: "wrap",
            }}
          >
            {titleLine2.split(" ").map((word, wordIndex) => (
              <Zoom
                key={wordIndex}
                in={true}
                timeout={800}
                style={{ transitionDelay: `${wordIndex * 200}ms` }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    animation: `slideUp 0.8s ${wordIndex * 0.2}s both`,
                    "@keyframes slideUp": {
                      "0%": {
                        opacity: 0,
                        transform: "translateY(20px)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "36px", md: "48px", lg: "64px" },
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #fff 0%, #e0e0e0 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -8,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        background: "linear-gradient(90deg, transparent, #fff, transparent)",
                        transform: "scaleX(0)",
                        transition: "transform 0.3s ease",
                      },
                      "&:hover::after": {
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    {word.split("").map((char, charIndex) => (
                      <Box
                        key={charIndex}
                        className="animated-letter"
                        sx={{
                          display: "inline-block",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px) rotate(5deg)",
                            color: "#ffd700",
                          },
                        }}
                      >
                        {char}
                      </Box>
                    ))}
                  </Typography>
                  {wordIndex < titleLine2.split(" ").length - 1 && (
                    <Box sx={{ width: 16 }} />
                  )}
                </Box>
              </Zoom>
            ))}
          </Stack>

          {/* Subtitle */}
          <Fade in={true} timeout={1500}>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 3,
                color: "rgba(255,255,255,0.8)",
                fontSize: { xs: "16px", md: "20px" },
                maxWidth: "600px",
                mx: "auto",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              Find answers to all your questions in our comprehensive FAQ section
            </Typography>
          </Fade>
        </Box>

        {/* Centered Search Box with 40% width */}
        <Box
          sx={{
            mt: 6,
            width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
            animation: "slideUp 1s 0.5s both",
            "@keyframes slideUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(30px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Paper
            elevation={6}
            sx={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: "20px",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <TextField
              placeholder="What can we help you find today?"
              variant="filled"
              value={searchQuery}
              onChange={handleSearch}
              fullWidth
              sx={{
                "& .MuiFilledInput-root": {
                  background: "transparent",
                  borderRadius: "20px",
                  fontSize: { xs: "16px", md: "18px" },
                  padding: "8px 14px",
                  "&:before, &:after": {
                    display: "none",
                  },
                  "&:hover": {
                    background: "transparent",
                  },
                },
                "& .MuiFilledInput-input": {
                  padding: 0,
                  "&::placeholder": {
                    color: "rgba(0,0,0,0.6)",
                    opacity: 1,
                  },
                },
              }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start" sx={{ mr: 2 }}>
                    <SearchIcon 
                      sx={{ 
                        color: "#666", 
                        fontSize: 28,
                        mb:2,
                        transition: "all 0.3s ease",
                        animation: searchQuery ? "pulse 2s infinite" : "none",
                        "@keyframes pulse": {
                          "0%, 100%": { transform: "scale(1)" },
                          "50%": { transform: "scale(1.1)" },
                        }
                      }} 
                    />
                  </InputAdornment>
                ),
                endAdornment: searchQuery && (
                  <InputAdornment position="end">
                    <IconButton onClick={clearSearch} size="large">
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Paper>

          {/* Search hints - Centered below search box */}
          <Fade in={!searchQuery} timeout={300}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ 
                mt: 3, 
                flexWrap: "wrap",
                width: "100%"
              }}
            >
              {["Billing", "Account", "Features", "Technical"].map((tag, index) => (
                <Box
                  key={index}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    bgcolor: "rgba(255,255,255,0.1)",
                    px: 2,
                    py: 0.5,
                    borderRadius: "16px",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.2)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Stack>
          </Fade>
        </Box>

        {/* Scroll indicator */}
        <Fade in={true} timeout={2000}>
          <Box
            sx={{
              position: "absolute",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.7)",
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
                "50%": { transform: "translateX(-50%) translateY(-10px)" },
              },
            }}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: 32 }} />
          </Box>
        </Fade>
      </Container>
     
    </Box>
    <FAQSection/>
    <ConnectUs/>
    </>
  );
};

export default Faqs;