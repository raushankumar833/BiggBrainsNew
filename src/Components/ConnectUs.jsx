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
import { useNavigate } from "react-router-dom";

const ConnectUs = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        background: "linear-gradient(135deg, #0f0c29, #0c345f, #24243e)",
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
                variant="h5"
                sx={{ fontWeight: "bold", color: "#1e1e4b", mb: 1, mt: 2 }}
              >
                Your queries and feedback are important to us
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#1e1e4b", mb: 3, fontWeight: 400 }}
              >
                we look forward to assisting you.
              </Typography>

              {/* Buttons */}
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={() => navigate("/contact")}
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
                    color: "#fff",
                    fontWeight: "bold",
                    px: 3,
                    "&:hover": {
                      background: "linear-gradient(135deg, #1a1333, #0c345f)",
                    },
                  }}
                >
                  Contact Us
                </Button>
                <Button
                  onClick={() => navigate("/ScheduleForm")}
                  variant="outlined"
                  sx={{
                    borderColor: "#24243e",
                    color: "#302b63",
                    fontWeight: "bold",
                    px: 3,
                    "&:hover": {
                      backgroundColor: "#ede9fe",
                      borderColor: "#6d28d9",
                    },
                  }}
                >
                  Schedule Meeting
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ConnectUs;
