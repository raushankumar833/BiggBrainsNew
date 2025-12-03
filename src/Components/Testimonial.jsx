import React from "react";
import { Box, Typography } from "@mui/material";

const testimonials = [
  {
    name: "Anjali Verma",
    role: "Product Manager, TechCorp",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328d88b0?w=600&q=80",
    testimonial:
      "The team delivered beyond our expectations. Their strategy and execution are simply top-notch.",
    rating: 5,
  },
  {
    name: "Rohan Kapoor",
    role: "CEO, StartupX",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
    testimonial:
      "Working with them was a joy. Creative solutions, fast delivery, and excellent communication.",
    rating: 4,
  },
  {
    name: "Priya Singh",
    role: "CTO, Innovate Labs",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&q=80",
    testimonial:
      "A dedicated team that goes above and beyond. They truly understand our vision.",
    rating: 5,
  },
  {
    name: "Kabir Arora",
    role: "Lead Developer, CodeWorks",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    testimonial:
      "Highly skilled professionals delivering consistent results. Our collaboration has been phenomenal.",
    rating: 5,
  },
  // Add more testimonials here
];

const TestimonialCard = ({ client }) => (
  <Box
    sx={{
      width: 260,
      height: "auto",
      p: 3,
      borderRadius: 4,
      background: "#fff",
      border: "2px solid #ffccd5",
      boxShadow: "0 12px 30px rgba(255,60,108,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "center",
      mb: 3,
    }}
  >
    <Box
      component="img"
      src={client.img}
      alt={client.name}
      sx={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        objectFit: "cover",
        border: "3px solid #ff3e6c",
        mb: 2,
      }}
    />
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component="span"
          sx={{
            color: i < client.rating ? "#ff3e6c" : "#ccc",
            fontSize: "1rem",
            mx: 0.3,
          }}
        >
          ★
        </Box>
      ))}
    </Box>
    <Typography
      sx={{
        fontSize: "0.9rem",
        color: "#333",
        fontStyle: "italic",
        mb: 1,
        overflowY: "auto",
        maxHeight: 90,
      }}
    >
      "{client.testimonial}"
    </Typography>
    <Typography sx={{ fontWeight: 700, color: "#ff3e6c", mb: 0.3 }}>
      {client.name}
    </Typography>
    <Typography sx={{ fontSize: "0.85rem", color: "#555a70" }}>
      {client.role}
    </Typography>
  </Box>
);

const Testimonial = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        py: { xs: 6, md: 10 },
        px: { xs: 4, md: 14 },
        bgcolor: "#fff5f8",
        gap: { xs: 6, md: 6 },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* ---------------- Mobile & Tablet: Top Image ---------------- */}
      <Box
        sx={{
          width: "100%",
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          height: { xs: 450, sm: 450 },
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 15px 40px rgba(255,60,108,0.15)",
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.35)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            px: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, opacity: 0.9 }}>
            Testimonials
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mt: 1,
              mb: 2,
              lineHeight: 1.3,
              color: "#ff4a74",
            }}
          >
            Who love our work
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Our goal is to create a product and service that you’re satisfied
            with and use it every day. This is why we’re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </Typography>
        </Box>
      </Box>

      {/* ---------------- Mobile: Single Column Scroll ---------------- */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none", md: "none" },
          width: "100%",
          height: 500,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            animation: "scrollUp 60s linear infinite",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} client={t} />
          ))}
        </Box>
      </Box>

      {/* ---------------- Tablet: Two Columns Scroll Below Image ---------------- */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "none" },
          width: "100%",
          gap: 4,
          overflow: "hidden",
          height: 600,
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        {/* Left Column: Scroll Up */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            animation: "scrollUp 60s linear infinite",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            padding: 0,
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} client={t} />
          ))}
        </Box>

        {/* Right Column: Scroll Down */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            animation: "scrollDown 35s linear infinite",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            padding: 0,
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} client={t} />
          ))}
        </Box>
      </Box>

      {/* ---------------- Desktop: Two Columns ---------------- */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flex: 0.6,
          gap: 4,
          overflow: "hidden",
          height: 650,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "max-content",
            animation: "scrollUp 40s linear infinite",
            willChange: "transform",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} client={t} />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            height: "max-content",
            animation: "scrollDown 40s linear infinite",
            willChange: "transform",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} client={t} />
          ))}
        </Box>
      </Box>

      {/* ---------------- Desktop: Right Image ---------------- */}
      <Box
        sx={{
          flex: 0.4,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
          padding: 0,
          position: "relative",
          height: 650,
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(255,60,108,0.15)",
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.35)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            px: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, opacity: 0.9 }}>
            Testimonials
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mt: 1,
              mb: 2,
              lineHeight: 1.3,
              color: "#ff4a74",
            }}
          >
            Who love our work
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Our goal is to create a product and service that you’re satisfied
            with and use it every day. This is why we’re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </Typography>
        </Box>
      </Box>

      {/* ---------------- Keyframes ---------------- */}
      <style>
        {`
         @keyframes scrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

@keyframes scrollDown {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}


        `}
      </style>
    </Box>
  );
};

export default Testimonial;
