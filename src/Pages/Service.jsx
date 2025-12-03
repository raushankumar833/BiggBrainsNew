import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { motion } from "framer-motion";
import ConnectUs from "../Components/ConnectUs";

const whatWeDo = [
  {
    icon: <WebIcon sx={{ fontSize: 34, color: "#111111" }} />,
    title: "Web Application",
    description:
      "Harnessing the power of cutting-edge technology to transform digital payments and set new industry benchmarks.",
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 34, color: "#111111" }} />,
    title: "Application Development",
    description:
      "Every transaction is backed by our commitment to reliability, transparency, and long-term trust.",
  },
  {
    icon: <DeveloperModeIcon sx={{ fontSize: 34, color: "#111111" }} />,
    title: "Hybrid Application",
    description:
      "We design every solution with our users in mind, ensuring seamless, hassle-free payment experiences.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.25, duration: 0.7 },
  }),
};
const Service = () => {
  return (
    <Box
      sx={{
        mt: "2rem",
        mb: "9rem",
        py: { xs: 8, md: 12 },
        background: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* HEADING */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                color: "#111111",
                mb: 1,
                fontSize: { xs: "1.6rem", md: "2.3rem" },
              }}
            >
              Work We Do
            </Typography>
          </motion.div>

          <Typography
            variant="subtitle1"
            sx={{
              color: "#111111",
              maxWidth: 500,
              mx: "auto",
            }}
          >
            The guiding principles behind everything we do
          </Typography>
        </Box>

        {/* ✅ ONLY 3 COLUMNS */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {whatWeDo.map((value, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.07 }}
                style={{ width: "100%", maxWidth: 360 }} // ✅ same width
              >
                <Card
                  sx={{
                    width: "100%",
                    aspectRatio: "1 / 1", // ✅ SQUARE
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    p: 3,
                    borderRadius: "24px",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    transition: "0.3s",
                    "&:hover": {
                      background: "rgba(255,255,255,0.14)",
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box>
                    {/* ICON */}
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        mx: "auto",
                        mb: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "linear-gradient(135deg, #FB923C 20%, #EC4899 100%)",
                      }}
                    >
                      {value.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "#111111", mb: 2 }}
                    >
                      {value.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#111111",
                        px: 1,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ConnectUs/>
    </Box>
  );
};

export default Service;
