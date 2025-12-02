import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function HomeCenter() {
  return (
    <Box
      sx={{
        py: 10,
        px: 10,
        bgcolor: "#6dbceaff", // gradient background
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          display='flex'
          alignItems="center"
          justifyContent="flex-start"
          maxWidth="400"
        >
          {/* Left Side */}
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#1a1a66", fontWeight: 600, mb: 1 ,m:{xs:-5, md:1}}}
            >
              Simplify Payments, Maximize Growth
            </Typography>

            <Typography
              variant="h3"
              sx={{ fontWeight: 800, color: "#1a1a66", mb: 2 ,m:{xs:5, md:1}}}
            >
              BiggBrains
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ color: "text.primary", fontWeight: 600, mb: 2 ,m:{xs:1, md:1}}}
            >
              Combined solutions for all services
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 4, maxWidth: {xs:"100%",md:"40%"} }}
            >
              Experience financial empowerment in one unified platform – where
              convenience meets comprehensive solutions, redefining your
              financial journey effortlessly.
            </Typography>

            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(90deg, #f2994a 0%, #9b51e0 100%)",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #e67e22 0%, #7e3ccf 100%)",
                },
              }}
            >
              Try P2PAE →
            </Button>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={5} lg={6}>
            <Stack direction="row" display='flex' alignItems="flex-end">
              <FormatQuoteIcon
                sx={{
                  fontSize: 40,
                  color: "#673ab7",
                  mb: {xs:27,md:3.5},
                  ml:{xs:-5,md:1}
                }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#1a1a66", fontWeight: 500, lineHeight: 1.6 }}
              >
                Whether you're a local retailer, or a thriving enterprise, our
                platform is tailored to elevate your business operations – a
                seamless solution for every shop size.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
