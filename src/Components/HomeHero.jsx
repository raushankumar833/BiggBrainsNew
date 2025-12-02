import React from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#fdfdfd",
        maxWidth: "100%",
        height: { xs: "90vh", md: "100vh" },
        mt: { xs: 25, md: 1 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 1 }}
        display={"flex"}
        justifyContent="flex-start"
        sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}
        // xs={{maxHeight:"100vh",}}
      >
        {/* Left Side (Text) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            mt: { xs: 6, md: 23 },
            ml: { md: 4 },
            px: { xs: 1, md: 0 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1rem", md: "3.4rem" },
              fontWeight: 900,
              color: "#2e1a63",
              fontFamily: "Poppins, serif",
              mb: 2.5,
              letterSpacing: "0.05em",
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}
          >
            Creating Great
            <br />
            Brands With
            <br />
            Great Ideas
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              mb: 4,
              maxWidth: 520,
              fontSize: { xs: "1rem", md: "1rem" },
              color: "#5f5f78",
              lineHeight: 1.7,
            }}
          >
            BiggBrains Solutions is registered with the Ministry of Corporate
            Affairs, delivering technology-driven websites, software and mobile
            applications that grow modern businesses.
          </Typography>

          <Stack direction="row" spacing={2.5}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                background: "linear-gradient(135deg, #1a1333, #3a1d6a)",
                textTransform: "uppercase",
                px: 4,
                py: 1.2,
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "14px",
                boxShadow: "0 12px 25px rgba(26, 19, 51, 0.25)",
                transition: "0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #2d1f55, #523094)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 28px rgba(26, 19, 51, 0.35)",
                },
              }}
            >
              Download App
            </Button>

            <Button
              variant="outlined"
              startIcon={<FlashOnIcon />}
              sx={{
                border: "2px solid #1a1333",
                color: "#1a1333",
                px: 4,
                py: 1.2,
                fontWeight: 700,
                borderRadius: "14px",
                letterSpacing: "0.05em",
                transition: "0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(26,19,51,0.05)",
                  borderColor: "#2d1f55",
                  color: "#2d1f55",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Grid>

        {/* Right Side (Images) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "absolute",
            right: { xs: "-40px", md: "9px" },
            top: { xs: "40%", md: "50%" },
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "space-between",
            gap: 1.3,
            opacity: {
              xs: 0.1,
              sm: 0.2,
              md: 1,
            },
          }}
        >
          {/* Left Image Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              height: "100vh",
            }}
          >
            <motion.div
              style={{ display: "flex", flexDirection: "column" }}
              animate={{ y: ["0%","-10%"] }}
              transition={{
                repeat: Infinity,
                duration: 31,
                ease: "linear",
              }}
            >
              {[...Array(10)].map((_, i) => (
                <img
                  key={i}
                  src="/src/assets/LeftImage.png"
                  alt="scroll image"
                  style={{
                    width: "100%",
                    maxWidth: "240px",
                    height: "auto",
                    marginBottom: "-1rem",
                  }}
                />
              ))}
            </motion.div>
          </Box>

          {/* Right Image Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              height: "100vh",
            }}
          >
            <motion.div
              style={{ display: "flex", flexDirection: "column" }}
              animate={{ y: ["-10%", "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 31,
                ease: "linear",
              }}
            >
              {[...Array(10)].map((_, i) => (
                <img
                  key={i}
                  src="/src/assets/RightImage.png"
                  alt="scroll image"
                  style={{
                    width: "100%",
                    maxWidth: "730px",
                    height: "auto",
                    marginBottom: "-1rem",
                  }}
                />
              ))}
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
