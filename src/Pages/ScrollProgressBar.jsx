import React, { useEffect, useRef } from "react";
import { Box, keyframes } from "@mui/material";

// Moving gradient animation
const moveGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Breathing glow animation
const breathingGlow = keyframes`
  0% { box-shadow: 0 0 12px rgba(255, 50, 160, 0.45); }
  50% { box-shadow: 0 0 22px rgba(255, 50, 160, 0.7); }
  100% { box-shadow: 0 0 12px rgba(255, 50, 160, 0.45); }
`;

const ScrollProgressBar = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (totalHeight === 0) return;

      const progress = (window.scrollY / totalHeight) * 100;

      // Directly update DOM for ultra smoothness
      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
    };

    // Initial update
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Soft separator line */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "1.5px",
          background: "rgba(255, 180, 220, 0.2)",
          backdropFilter: "blur(12px)",
          zIndex: 9998,
        }}
      />

      {/* Ultra-Smooth Lips-Pink Bar */}
      <Box
        ref={barRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "5px",
          width: "0%",
          background:
            "linear-gradient(90deg, #ff99d9, #ff4da6, #ff1a8c, #ff4da6, #ff99d9)",
          backgroundSize: "400% 400%",
          animation: `${moveGradient} 3s ease infinite, ${breathingGlow} 3s ease-in-out infinite`,
          transition: "width 0.08s cubic-bezier(0.22, 1, 0.36, 1)",
          borderRadius: "0 12px 12px 0",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default ScrollProgressBar;
