import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import * as motion from "motion/react-client";

const HeroSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        background: "linear-gradient(90deg, #0f172a, #1e1b4b, #2e1065)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 1000,
          borderRadius: 3,
          background: "linear-gradient(135deg, #e0f7fa, #bbdefb)",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <CardContent>
          <Grid container alignItems="center" justifyContent="center">
            {/* Left Image */}
            <Grid item xs={12} md={4} sx={{ maxWidth: 350 }}>
              <motion.img
                src="/src/assets/person.jpg"
                alt="Financial Journey"
                style={{
                  width: "70%",
                  borderRadius: "16px", // same as borderRadius={2}
                  marginLeft: "20px", // ml: 5 (theme spacing → ~40px, adjust if needed)
                  marginTop: "16px", // mt: 2
                }}
                animate={{ scale: [1, 1.1, 1] }} // zoom in & out
                transition={{
                  duration: 2, // animation runs for 2s
                  repeat: Infinity, // infinite loop
                  repeatDelay: 1, // 1s pause → total cycle = 3s
                  ease: "easeInOut",
                }}
              />
            </Grid>

            {/* Right Content */}
            <Grid item xs={12} md={7}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#1e1e4b", mb: 2, mt: 2 }}
              >
                Empower Your Financial Journey
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#1e1e4b", mb: 3, fontWeight: 400 }}
              >
                Seamless, Secure, and Smart Solutions to Grow Your Earnings.
              </Typography>

              {/* Bullet Points */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ color: "#1e1e4b", mb: 1 }}>
                  • Fast and reliable transactions anytime, anywhere.
                </Typography>
                <Typography variant="body1" sx={{ color: "#1e1e4b", mb: 1 }}>
                  • Advanced analytics to track your progress and growth.
                </Typography>
                <Typography variant="body1" sx={{ color: "#1e1e4b" }}>
                  • Personalized dashboard to manage your business efficiently.
                </Typography>
              </Box>

              {/* Buttons */}
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(90deg, #7c3aed, #6d28d9, #4c1d95)",
                    color: "#fff",
                    fontWeight: "bold",
                    px: 3,
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #6d28d9, #5b21b6, #3b0764)",
                    },
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#7c3aed",
                    color: "#6d28d9",
                    fontWeight: "bold",
                    px: 3,
                    "&:hover": {
                      backgroundColor: "#ede9fe",
                      borderColor: "#6d28d9",
                    },
                  }}
                >
                  Explore Services
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HeroSection;
