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
        height: { xs: "auto", sm: "90vh", md: "100vh" }, // ✅ FIX
        mt: { xs: 15, sm: 20, md: 1 }, // ✅ FIX
        pb: { xs: 10, md: 0 }, // ✅ FIX
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 1 }}
        justifyContent="flex-start"
        sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}
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
            mt: { xs: 4, sm: 8, md: 23 }, // ✅ FIX
            ml: { xs : 0, md: 4 },
            px: { xs: 1, md: 0 },
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2.4rem", md: "3.4rem" }, // ✅ FIX
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
              maxWidth: {xs:240, md: 520},
              fontSize: { xs: "0.75rem", md: "1rem" }, // ✅ FIX
              color: "#5f5f78",
              lineHeight: 1.7,
            }}
          >
            BiggBrains Solutions is registered with the Ministry of Corporate
            Affairs, delivering technology-driven websites, software and mobile
            applications that grow modern businesses.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }} // ✅ FIX
            spacing={2.5}
            width="100%"
          >
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                background: "linear-gradient(135deg, #1a1333, #3a1d6a)",
                textTransform: "uppercase",
                px: { xs: 2.5, md: 4 }, // ✅ FIX
                py: 1.2,
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "14px",
                boxShadow: "0 12px 25px rgba(26, 19, 51, 0.25)",
                width: { xs: "100%", sm: "auto" }, // ✅ FIX
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
                px: { xs: 0.5, md: 4 }, // ✅ FIX
                py: { xs: 0.5, md: 1.2 },
                fontWeight: 700,
                borderRadius: "14px",
                letterSpacing: "0.05em",
                width: { xs: "100%", sm: "auto" }, // ✅ FIX
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
            right: { xs: "0px", md: "9px" }, // ✅ FIX
            top: { xs: "40%", sm: "55%", md: "50%" }, // ✅ FIX
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "space-between",
            gap: { xs: 0.5, md: 1.3 }, // ✅ FIX
            opacity: { xs: 0.15, sm: 0.25, md: 1 }, // ✅ FIX
            zIndex: 1,
          }}
        >
          {/* Left Image Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              height: { xs: "60vh", md: "100vh" }, // ✅ FIX (LG UNCHANGED)
            }}
          >
            <motion.div
              style={{ display: "flex", flexDirection: "column" }}
              animate={{ y: ["0%", "-10%"] }}
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
              height: { xs: "60vh", md: "100vh" }, // ✅ FIX
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

