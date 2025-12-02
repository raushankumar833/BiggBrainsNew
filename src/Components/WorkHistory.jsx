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
        variant="h3"
        sx={{
          textAlign: "left",
          fontWeight: 900,
          mb: { xs: 4, md: 6 },
          color: "#2e1a63",
          letterSpacing: "0.01em",
          fontFamily: "'Montserrat', sans-serif",
          pl: { xs: 0, md: 2 },
        }}
      >
        Our Work History
      </Typography>

      {/* Image section */}
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          md={10}
          lg={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/src/assets/work-history1.png"
            alt="Work History"
            sx={{
              width: { xs: "100%" },
              maxWidth: "md",
              height: "auto",
              objectFit: "contain",
              mx: "auto",
              display: "block",
              transform: "translateY(-6rem)", ml: { xs: 0, md: 15 },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkHistory;
