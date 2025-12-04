import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
 
const images = [
  "/src/assets/portfolio/1.png",
  "/src/assets/portfolio/2.png",
  "/src/assets/portfolio/3.png",
  "/src/assets/portfolio/4.png",
  "/src/assets/portfolio/5.png",
  "/src/assets/portfolio/6.png",
  "/src/assets/portfolio/7.png",
  "/src/assets/portfolio/8.png",
  "/src/assets/portfolio/9.png",
  "/src/assets/portfolio/10.png",
];

const Portfolio = () => {
  const [activeImage, setActiveImage] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" }, // mobile auto, desktop 100vh
        bgcolor: "#f5f7fb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 8 },
        mt: "2rem",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={{ xs: 3, md: 3 }}
        textAlign="center"
        fontSize={{ xs: "1.8rem", md: "2.5rem" }}
      >
        Our Portfolio
      </Typography>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        style={{
          width: "80%",
          borderRadius: "1.5rem",
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Box
              onMouseEnter={() => setActiveImage(img)}
              onMouseLeave={() => setActiveImage("")}
              sx={{
                position: "relative",
                width: "100%",
                height: {
                  xs: "auto", // mobile auto
                  sm: "250px", // small tablets
                  md: "400px", // desktop
                  lg: "500px", // large desktop
                },
                borderRadius: "28px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 20px 50px rgba(0,0,0,.15)",
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                },
                "&:hover img": {
                  transform: { xs: "none", md: "scale(1.08)" },
                },
              }}
            >
              <img src={img} alt={`portfolio-${i}`} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Portfolio;
