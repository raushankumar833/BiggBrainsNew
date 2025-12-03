import { Box, Grid, Typography } from "@mui/material";

const WorkHistory = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Section Heading */}
      <Typography
        sx={{
          textAlign: "left",
          fontWeight: 900,
          color: "#2e1a63",
          fontFamily: "'Montserrat', sans-serif",

          /* Responsive font size */
          fontSize: {
            xs: "1.8rem",
            sm: "2.2rem",
            md: "2.8rem",
            lg: "3.2rem",
          },

          /* Responsive spacing */
          mb: {
            xs: 3,
            sm: 4,
            md: 5,
            lg: 6,
          },

          /* Optional left padding for large screens */
          pl: {
            xs: 0,
            md: 1,
          },
        }}
      >
        Our Work History
      </Typography>
      {/* Image section */}
      <Grid container justifyContent="flex-start">
        <Grid item xs={12} md={10} lg={8}>
          <Box
            component="img"
            src="/src/assets/work-history1.png"
            alt="Work History"
            sx={{
              width: {
                xs: "100%",
              },

              height: "auto",
              objectFit: "contain",

              /* Responsive vertical position */
              transform: {
                xs: "translateY(-2rem)",
                sm: "translateY(-3rem)",
                md: "translateY(-4rem)",
              },

              /* Responsive left movement */
              ml: {
                xs: 0,
                sm: 2,
                md: 6,
                lg: 15,
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkHistory;
