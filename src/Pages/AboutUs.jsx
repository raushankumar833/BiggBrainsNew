import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Stack,
  keyframes,
} from "@mui/material";
import { motion } from "framer-motion";
import OurTeam from "./OurTeam"
import Testimonial from "./Testimonial";

// Fade-in + slide-up animation for hero text
const fadeSlideIn = keyframes`
  0% { opacity: 0; transform: translateY(30px);}
  100% { opacity: 1; transform: translateY(0);}
`;

// Glow animation for button
const glow = keyframes`
  0% {
    box-shadow: 0 0 8px 0 rgba(30, 144, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(30, 144, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 8px 0 rgba(30, 144, 255, 0.6);
  }
`;

// SkillBar component for progress bars
function SkillBar({ label, value }) {
  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Typography variant="subtitle1" fontWeight={700} color="text.primary">
          {label}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>
          {value}%
        </Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 6,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            borderRadius: 6,
            backgroundColor: "#5f6264",
            transition: "width 1.5s ease-in-out",
          },
        }}
      />
    </Box>
  );
}


export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
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
              fontWeight: "900",
              fontSize: { xs: "2.8rem", md: "4rem" },
              letterSpacing: "0.12em",
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
              lineHeight: 1.7,
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
              padding: "15px 36px",
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

      {/* Who We Are Section */}
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 10 },
          px: { xs: 4, md: 14 },
          py: { xs: 10, md: 16 },
          bgcolor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.05)",
          borderRadius: 4,
        }}
      >
        {/* Left Images */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            flexShrink: 0,
            justifyContent: "center",
            width: { xs: "100%", md: "45%" },
          }}
        >
          {/* First image bigger */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80"
            alt="Team meeting"
            sx={{
              borderRadius: 5,
              boxShadow:
                "0 12px 30px rgba(30, 144, 255, 0.3), 0 6px 15px rgba(0, 170, 255, 0.25)",
              width: "100%",
              maxHeight: 480,
              objectFit: "cover",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow:
                  "0 20px 45px rgba(30, 144, 255, 0.5), 0 10px 25px rgba(0, 170, 255, 0.4)",
              },
            }}
          />
          {/* Second image smaller */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
            alt="Working on laptop"
            sx={{
              borderRadius: 5,
              boxShadow:
                "0 10px 25px rgba(10, 110, 210, 0.2), 0 6px 12px rgba(0, 140, 255, 0.15)",
              width: "80%",
              maxHeight: 320,
              objectFit: "cover",
              alignSelf: "flex-end",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.07)",
                boxShadow:
                  "0 15px 35px rgba(10, 110, 210, 0.4), 0 8px 20px rgba(0, 140, 255, 0.3)",
              },
            }}
          />
        </Box>

        {/* Right Content */}
        <Box sx={{ width: { xs: "100%", md: "55%" } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mb: 3,
              color: "#1e1e2f",
              letterSpacing: "0.05em",
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontFamily: "'Inter', sans-serif",
              textTransform: "uppercase",
            }}
          >
            Who We Are
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 7,
              color: "#555770",
              lineHeight: 1.7,
              maxWidth: 700,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Biggbrains envisions a straightforward mission: crafting dependable
            mobile applications and web designs infused with contemporary
            digital marketing practices. Our core values revolve around
            excellence, passion, and adaptability. Recognized as one of the
            premier software development companies in Delhi, we specialize in
            delivering technically intricate projects promptly and within
            budget, tailored to meet our clients' specific requirements. Our
            expertise spans a diverse array of projects, ranging from
            straightforward information systems and websites to sophisticated
            mobile applications.
          </Typography>

          <SkillBar label="Web Development" value={95} />
          <SkillBar label="App Development" value={74} />
          <SkillBar label="Tech Consultancy" value={68} />
        </Box>
      </Box>



      <OurTeam />





      {/* Two-Column Grid Testimonial Section */}
      <Testimonial />



    </>
  );
}
