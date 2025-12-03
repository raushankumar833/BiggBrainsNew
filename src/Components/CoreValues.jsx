import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import * as motion from "motion/react-client";

const coreValues = [
  {
    icon: <LightbulbIcon sx={{ fontSize: 30, color: "white" }} />,
    title: "Innovation",
    description:
      "Harnessing the power of cutting-edge technology to transform digital payments and set new industry benchmarks.",
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 30, color: "white" }} />,
    title: "Trust",
    description:
      "Every transaction is backed by our commitment to reliability, transparency, and long-term trust.",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 30, color: "white" }} />,
    title: "Customer Focus",
    description:
      "We design every solution with our users in mind, ensuring seamless, hassle-free payment experiences.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 30, color: "white" }} />,
    title: "Security",
    description:
      "With advanced encryption and robust safeguards, your transactions remain fully protected at all times.",
  },
];

const CoreValues = () => {
  return (
    <Box sx={{ py: 8, background: "#f5f7fb" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <motion.div
            animate={{ y: [0, 13, 0] }} // moves 0px → 30px down → back to 0
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Our Core Values
            </Typography>
          </motion.div>
          <motion.div
            animate={{x: [-900, 0] }} 
            transition={{duration: 1.5,}}
          >
          <Typography variant="subtitle1" color="text.secondary">
            The guiding principles behind everything we do
          </Typography>
          </motion.div>
        </Box>

        {/* 4-column layout (always one line on desktop) */}
        <Grid container spacing={4} justifyContent="center">
          {coreValues.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: 3,
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                  aspectRatio: "1 / 1", // makes card square
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 0.5,
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-9px)",
                    boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                  }}
                >
                  {value.icon}
                </Box>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ maxWidth: 250 }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreValues;
