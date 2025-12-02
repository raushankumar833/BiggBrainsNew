import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import * as motion from "motion/react-client";

const Mission = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: "#f9f9f9",
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left Side */}
        <Grid item xs={12} md={6} sx={{ maxWidth: 580 }}>
          {/* Mission */}
          <motion.div
            animate={{x: [-300, 0] }} 
            transition={{duration: 0.5,}}>

          
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 1,
              background: "linear-gradient(178deg, #f6a04d, #5A2DFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#2a1a5e", mb: 4, lineHeight: 1.6 }}
          >
            To empower businesses and individuals with secure, seamless, and
            innovative digital payment solutions, simplifying financial
            transactions while ensuring trust, accessibility, and efficiency
            across India.
          </Typography>

          {/* Vision */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 1,
              background: "linear-gradient(178deg, #f6a04d, #5A2DFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#2a1a5e", mb: 4, lineHeight: 1.6 }}
          >
            To be India’s most trusted and fastest-growing digital fintech
            ecosystem, driving financial inclusion by making payments, banking,
            and essential services accessible to every corner of the country.
          </Typography>

          {/* Values */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 1,
              background: "linear-gradient(178deg, #f6a04d, #5A2DFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Values
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#2a1a5e", lineHeight: 1.6 }}
          >
            Our values guide everything we do: integrity in every transaction,
            innovation in creating cutting-edge solutions, customer-centricity
            by keeping users at the heart of our services, inclusion to make
            financial services accessible to all, and excellence in delivering
            high-quality solutions consistently.
          </Typography>
          </motion.div>
        </Grid>

        {/* Right Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            src="/src/assets/mission-vision-values.png"
            alt="Mission Vision Values"
            style={{
              maxWidth: "80%",
              borderRadius: "16px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;
