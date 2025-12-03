import { Box, Typography, IconButton } from "@mui/material";
import { useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const teamMembers = [
  {
    name: "Arjun Mehra",
    role: "CEO & Founder",
    linkedin: "https://linkedin.com/",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&q=80",
  },
  {
    name: "Riya Sharma",
    role: "Lead UI/UX Designer",
    linkedin: "https://linkedin.com/",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
  },
  {
    name: "Kabir Arora",
    role: "Senior Full-Stack Developer",
    linkedin: "https://linkedin.com/",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328d88b0?w=600&q=80",
  },
  {
    name: "Neha Kapoor",
    role: "Marketing Head",
    linkedin: "https://linkedin.com/",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328d88b0?w=600&q=80",
  },
  // Add more team members here
];

export default function MeetOurTeam() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        px: { xs: 4, md: 14 },
        bgcolor: "#f4f6f9",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Floating Circles */}
      {[
        { size: 180, top: 30, right: 30, color: "rgba(0,153,255,0.35)", blur: 4, duration: 20 },
        { size: 200, bottom: 30, left: 30, color: "rgba(255,120,120,0.35)", blur: 4, duration: 25 },
        { size: 100, top: 200, left: 100, color: "rgba(0,255,150,0.25)", blur: 6, duration: 18 },
        { size: 150, bottom: 150, right: 200, color: "rgba(255,200,0,0.2)", blur: 5, duration: 22 },
      ].map((circle, idx) => (
        <Box
          key={idx}
          sx={{
            position: "absolute",
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${circle.color}, rgba(0,0,0,0))`,
            filter: `blur(${circle.blur}px)`,
            zIndex: 1,
            top: circle.top ?? "auto",
            bottom: circle.bottom ?? "auto",
            left: circle.left ?? "auto",
            right: circle.right ?? "auto",
            animation: `float${idx} ${circle.duration}s ease-in-out infinite alternate`,
            pointerEvents: "none",
          }}
        />
      ))}
      <style>{`
        @keyframes float0 { 0% { transform: translateY(0px) } 100% { transform: translateY(-20px) } }
        @keyframes float1 { 0% { transform: translateY(0px) } 100% { transform: translateY(25px) } }
        @keyframes float2 { 0% { transform: translateY(0px) } 100% { transform: translateY(-15px) } }
        @keyframes float3 { 0% { transform: translateY(0px) } 100% { transform: translateY(20px) } }
      `}</style>

      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          mb: 2,
          fontFamily: "'Inter', sans-serif",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          background: "linear-gradient(90deg, #1e90ff, #00c6ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: { xs: "2.2rem", md: "2.8rem" },
          position: "relative",
          zIndex: 5,
        }}
      >
        Meet Our Team
      </Typography>

      <Typography
        sx={{
          mb: 10,
          maxWidth: 700,
          margin: "0 auto",
          fontSize: "1.2rem",
          color: "#6b6f80",
          lineHeight: 1.75,
          fontWeight: 400,
          position: "relative",
          zIndex: 5,
        }}
      >
        Innovative minds, creative thinkers, and tech experts dedicated to building world-class solutions.
      </Typography>

      {/* Horizontal Scroll Container */}
      <Box sx={{ position: "relative" }}>
        {/* Left Arrow */}
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 10,
            bgcolor: "transparent",
            "&:hover": { bgcolor: "#1e90ff", color: "#fff" },
            boxShadow: "none",
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Cards Scroll Area */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 5,
            overflowX: "auto",
            scrollBehavior: "smooth",
            px: 0,
            pb: 2,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 280px",
                scrollSnapAlign: "start",
                p: 4,
                borderRadius: 5,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                background: "transparent",
                backdropFilter: "none",
                border: "none",
                boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-12px) scale(1.05)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box
                component="img"
                src={member.img}
                alt={member.name}
                sx={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  objectFit: "cover",
                  margin: "0 auto 20px",
                  border: "5px solid #e6f2ff",
                  boxShadow: "0 12px 30px rgba(30,144,255,0.35)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  "&:hover": { transform: "scale(1.15)", boxShadow: "0 15px 45px rgba(30,144,255,0.55)" },
                }}
              />

              <Typography sx={{ fontSize: "1.45rem", fontWeight: 800, color: "#1c1f29", mb: 0.5 }}>
                {member.name}
              </Typography>
              <Typography sx={{ fontSize: "1.05rem", fontWeight: 500, color: "#6b6f80", mb: 2 }}>
                {member.role}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#eaf4ff",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                      "&:hover": { bgcolor: "#1e90ff", transform: "scale(1.2) rotate(10deg)", boxShadow: "0 8px 25px rgba(30,144,255,0.45)" },
                      "& svg": { color: "#1e90ff", transition: "0.3s" },
                      "&:hover svg": { color: "#fff" },
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.6 4.75 6V24h-4v-7.9c0-1.9-.03-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24h-4V8z" />
                    </svg>
                  </Box>
                </a>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 10,
            bgcolor: "transparent",
            "&:hover": { bgcolor: "#1e90ff", color: "#fff" },
            boxShadow: "none",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
