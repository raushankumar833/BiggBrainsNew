import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useState, useEffect } from "react";
import { Box, Typography, Popover } from "@mui/material";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  const handleHover = (event, img) => {
    setAnchorEl(event.currentTarget);
    setActiveImage(img);
  };

  const handleLeave = () => {
    setAnchorEl(null);
    setActiveImage("");
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
        mt:"1.5rem"
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={3}>
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
          height: "500px",
          borderRadius: "1.5rem"
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Box
              onMouseEnter={(e) => handleHover(e, img)}
              onMouseLeave={handleLeave}
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "28px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 20px 50px rgba(0,0,0,.15)",
                "&:hover img": {
                  transform: "scale(1.08)",
                },
                
              }}
            >
              {/* IMAGE */}
              <img
                src={img}
                alt="portfolio"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.6s ease",
                }}
              />

              {/* HOVER OVERLAY */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.6)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: "bold",
                  opacity: 0,
                  transition: "0.4s ease",
                  pointerEvents: "none",
                }}
              >
                Preview
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default Portfolio;
