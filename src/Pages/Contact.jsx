import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Stack,
  IconButton,
  Box,
  Card,
  Paper,
  useTheme,
  useMediaQuery,
  InputAdornment,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PublicIcon from "@mui/icons-material/Public";
import { MessageCircleIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 4, md: 8 },
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #00b4d8, #90e0ef, #00b4d8)",
          zIndex: 2,
        },
      }}
    >
      {/* Header Section with Full Width Background Image */}
      <Box 
        sx={{
          position: "relative",
          width: "100%",
          mb: { xs: 6, md: 8 },
          minHeight: { xs: "250px", md: "550px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(10, 25, 41, 0.85), rgba(10, 25, 41, 0.9)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          borderBottom: "1px solid rgba(144, 224, 239, 0.2)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(45deg, rgba(0, 180, 216, 0.1), rgba(144, 224, 239, 0.05))",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box 
            sx={{ 
              textAlign: "center",
              py: { xs: 4, md: 6 },
              px: { xs: 2, sm: 3, md: 4 }
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              gutterBottom
              sx={{
                background: "linear-gradient(45deg, #90e0ef, #00b4d8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 20px rgba(144, 224, 239, 0.3)",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                lineHeight: { xs: 1.2, md: 1.1 },
              }}
            >
              Let's Connect & Create
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#e0f7fa",
                mx: "auto",
                fontWeight: 300,
                lineHeight: 1.6,
                mt: 3,
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                maxWidth: "800px",
              }}
            >
              Share your vision with us. We're here to transform your ideas into 
              remarkable digital experiences. Reach out and let's start the conversation.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Form and Contact Info Section */}
      {/* Form and Contact Info Section */}
  <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 5, md: 8 } }}>
  <Grid container spacing={{ xs: 3, md: 5 }}>
    {/* ================= LEFT CARDS (40% width) ================= */}
    <Grid item xs={12} md={4.8}>
      <Stack spacing={{ xs: 3, md: 4 }}>
        {/* Office Card */}
        <Card
          sx={{
            p: { xs: 3, sm: 3.5, md: 4 },
            background: "linear-gradient(145deg, #ffffff, #f8fafc)",
            borderRadius: { xs: "20px", md: "24px" },
            border: "2px solid rgba(29, 45, 70, 0.08)",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
            "&:hover": {
              transform: "translateY(-8px) scale(1.01)",
              borderColor: "#1d2d46",
              boxShadow: "0 20px 40px rgba(29, 45, 70, 0.2)",
              "& .icon-container": {
                transform: "scale(1.1) rotate(5deg)",
                boxShadow: "0 15px 30px rgba(29, 45, 70, 0.3)",
              },
              "& .card-content": {
                transform: "translateX(5px)",
              },
            },
          }}
        >
          <Box className="card-content" sx={{ transition: "transform 0.3s ease" }}>
            <Stack direction="row" spacing={2.5} alignItems="center" mb={3}>
              <Box
                className="icon-container"
                sx={{
                  // p: 1.5,
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #1d2d46, #2d3e5d)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 8px 20px rgba(29, 45, 70, 0.3)",
                }}
              >
                <LocationOnIcon sx={{ color: "#ffffff", fontSize: { xs: "1.8rem", md: "2.2rem" } }} />
              </Box>
              <Typography variant="h5" fontWeight={800} sx={{
                color: "#1d2d46",
                fontSize: { xs: "1.4rem", md: "1.6rem" },
                background: "linear-gradient(135deg, #1d2d46 0%, #3d5070 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Main Office
              </Typography>
            </Stack>
            <Typography sx={{
              color: "#5a6c7d",
              lineHeight: 1.7,
              textAlign: "center",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              pl: 0.5,
            }}>
              <Box component="span" sx={{
                color: "#1d2d46",
                fontWeight: 700,
                display: "block",
                mb: 0.5,
              }}>
                Monday–Friday
              </Box>
              10:00 am – 7:30 pm
            </Typography>
            <Typography sx={{
              color: "#5a6c7d",
              lineHeight: 1.7,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              pl: 0.5,
            }}>
              Plot No. 8 Pocket, 6, Sector 22, Rohini, Delhi, 110086
            </Typography>
          </Box>
        </Card>

        {/* Contact Card */}
        <Card
          sx={{
            p: { xs: 3, sm: 3.5, md: 4 },
            background: "linear-gradient(145deg, #ffffff, #f8fafc)",
            borderRadius: { xs: "20px", md: "24px" },
            border: "2px solid rgba(29, 45, 70, 0.08)",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
            "&:hover": {
              transform: "translateY(-8px) scale(1.01)",
              borderColor: "#1d2d46",
              boxShadow: "0 20px 40px rgba(29, 45, 70, 0.2)",
              "& .icon-container": {
                transform: "scale(1.1) rotate(5deg)",
                boxShadow: "0 15px 30px rgba(29, 45, 70, 0.3)",
              },
              "& .card-content": {
                transform: "translateX(5px)",
              },
            },
          }}
        >
          <Box className="card-content" sx={{ transition: "transform 0.3s ease" }}>
            <Stack direction="row" spacing={2.5} alignItems="center" mb={3}>
              <Box
                className="icon-container"
                sx={{
                   p: 1,
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #1d2d46, #2d3e5d)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 8px 20px rgba(29, 45, 70, 0.3)",
                }}
              >
                <ContactMailIcon sx={{ color: "#ffffff", fontSize: { xs: "1.8rem", md: "2.2rem" } }} />
              </Box>
              <Typography variant="h5" fontWeight={800} sx={{
                color: "#1d2d46",
                fontSize: { xs: "1.4rem", md: "1.6rem" },
                background: "linear-gradient(135deg, #1d2d46 0%, #3d5070 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Contact Info
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Box
                component="a"
                href="mailto:connect@biggbrains.com"
                sx={{
                  color: "#1d2d46",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  p: 1,
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#3d5070",
                    background: "rgba(29, 45, 70, 0.05)",
                    transform: "translateX(5px)",
                    boxShadow: "0 4px 12px rgba(29, 45, 70, 0.1)",
                  },
                }}
              >
                connect@biggbrains.com
              </Box>
              <Box
                component="a"
                href="tel:+917011256694"
                sx={{
                  color: "#1d2d46",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  p: 1,
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#3d5070",
                    background: "rgba(29, 45, 70, 0.05)",
                    transform: "translateX(5px)",
                    boxShadow: "0 4px 12px rgba(29, 45, 70, 0.1)",
                  },
                }}
              >
                <PhoneIcon sx={{ fontSize: "1.2rem" }} />
                +91 7011256694
              </Box>
            </Stack>
          </Box>
        </Card>

        {/* Social Media Card */}
        <Card
          sx={{
            p: { xs: 3, sm: 3.5, md: 4 },
            background: "linear-gradient(145deg, #ffffff, #f8fafc)",
            borderRadius: { xs: "20px", md: "24px" },
            border: "2px solid rgba(29, 45, 70, 0.08)",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
            "&:hover": {
              transform: "translateY(-8px) scale(1.01)",
              borderColor: "#1d2d46",
              boxShadow: "0 20px 40px rgba(29, 45, 70, 0.2)",
              "& .icon-container": {
                transform: "scale(1.1) rotate(5deg)",
                boxShadow: "0 15px 30px rgba(29, 45, 70, 0.3)",
              },
            },
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center" mb={3.5}>
            <Box
              className="icon-container"
              sx={{
                p: 1.5,
                borderRadius: "14px",
                background: "linear-gradient(135deg, #1d2d46, #2d3e5d)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 20px rgba(29, 45, 70, 0.3)",
              }}
            >
              <PublicIcon sx={{ color: "#ffffff", fontSize: { xs: "1.8rem", md: "2.2rem" } }} />
            </Box>
            <Typography variant="h5" fontWeight={800} sx={{
              color: "#1d2d46",
              fontSize: { xs: "1.4rem", md: "1.6rem" },
              background: "linear-gradient(135deg, #1d2d46 0%, #3d5070 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Follow Us
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" spacing={{ xs: 1, sm: 2 }}>
            {[
              { icon: <InstagramIcon />, color: "#E4405F", name: "Instagram" },
              { icon: <LinkedInIcon />, color: "#0A66C2", name: "LinkedIn" },
              { icon: <FacebookIcon />, color: "#1877F2", name: "Facebook" },
              { icon: <YouTubeIcon />, color: "#FF0000", name: "YouTube" },
            ].map((social, index) => (
              <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <IconButton
                  aria-label={social.name}
                  sx={{
                    backgroundColor: "#ffffff",
                    width: { xs: 56, sm: 60, md: 64 },
                    height: { xs: 56, sm: 60, md: 64 },
                    border: "2px solid #e2e8f0",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(135deg, ${social.color}, ${social.color}80)`,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.1)",
                      borderColor: social.color,
                      boxShadow: `0 15px 30px ${social.color}40`,
                      "&::before": {
                        opacity: 0.1,
                      },
                      "& .social-icon": {
                        color: social.color,
                      },
                    },
                  }}
                >
                  {React.cloneElement(social.icon, {
                    className: "social-icon",
                    sx: {
                      fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
                      color: "#64748b",
                      position: "relative",
                      zIndex: 1,
                      transition: "color 0.3s ease",
                    },
                  })}
                </IconButton>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#64748b",
                    mt: 1,
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    opacity: 0.8,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: social.color,
                    },
                  }}
                >
                  {social.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Card>
      </Stack>
    </Grid>

    {/* ================= RIGHT FORM (60% width) ================= */}
    <Grid item xs={12} md={7.2}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          background: "linear-gradient(145deg, #ffffff, #f8fafc)",
          borderRadius: { xs: "20px", md: "24px" },
          border: "2px solid rgba(29, 45, 70, 0.08)",
          position: "relative",
          overflow: "hidden",
          boxShadow: `
            0 15px 35px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8)
          `,
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: `
              0 25px 50px rgba(29, 45, 70, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.8)
            `,
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `
              radial-gradient(circle at 20% 80%, rgba(29, 45, 70, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(61, 80, 112, 0.05) 0%, transparent 50%)
            `,
            zIndex: 0,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "3px",
            background: "linear-gradient(90deg, transparent, #1d2d46, transparent)",
            animation: "shimmer 2.5s infinite",
            zIndex: 1,
          },
          "@keyframes shimmer": {
            "0%": {
              left: "-100%",
            },
            "100%": {
              left: "100%",
            },
          },
        }}
      >
        <Box position="relative" zIndex={1}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              fontWeight={800}
              gutterBottom
              sx={{
                color: "#1d2d46",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                background: "linear-gradient(135deg, #1d2d46 0%, #3d5070 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Send Us a Message
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#5a6c7d",
                mb: 4,
                fontWeight: 400,
                fontSize: { xs: "1rem", md: "1.2rem" },
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: 0,
                  width: "60px",
                  height: "3px",
                  background: "linear-gradient(90deg, #1d2d46, #3d5070)",
                  borderRadius: "2px",
                },
              }}
            >
              We typically respond within 24 hours
            </Typography>
          </Box>

          <form>
            <Stack spacing={3}>
              {/* Name + Phone */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    variant="outlined"
                    size="medium"
                    InputLabelProps={{
                      sx: {
                        color: "#64748b",
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        "&.Mui-focused": {
                          color: "#1d2d46",
                        },
                        "&.MuiInputLabel-shrink": {
                          color: "#1d2d46",
                          transform: "translate(14px, -9px) scale(0.85)",
                        },
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        "& fieldset": {
                          borderColor: "#e2e8f0",
                          borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                          borderColor: "#3d5070",
                          boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.1)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#1d2d46",
                          borderWidth: "2px",
                          boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.2)",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#0f172a",
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        padding: "16px 14px",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    variant="outlined"
                    size="medium"
                    InputLabelProps={{
                      sx: {
                        color: "#64748b",
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        "&.Mui-focused": {
                          color: "#1d2d46",
                        },
                        "&.MuiInputLabel-shrink": {
                          color: "#1d2d46",
                          transform: "translate(14px, -9px) scale(0.85)",
                        },
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        "& fieldset": {
                          borderColor: "#e2e8f0",
                          borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                          borderColor: "#3d5070",
                          boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.1)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#1d2d46",
                          borderWidth: "2px",
                          boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.2)",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#0f172a",
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        padding: "16px 14px",
                      },
                    }}
                  />
                </Box>
              </Stack>

              {/* Email */}
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                variant="outlined"
                size="medium"
                InputLabelProps={{
                  sx: {
                    color: "#64748b",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    "&.Mui-focused": {
                      color: "#1d2d46",
                    },
                    "&.MuiInputLabel-shrink": {
                      color: "#1d2d46",
                      transform: "translate(14px, -9px) scale(0.85)",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    "& fieldset": {
                      borderColor: "#e2e8f0",
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#3d5070",
                      boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.1)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1d2d46",
                      borderWidth: "2px",
                      boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#0f172a",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    padding: "16px 14px",
                  },
                }}
              />

              {/* Subject */}
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                variant="outlined"
                size="medium"
                InputLabelProps={{
                  sx: {
                    color: "#64748b",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    "&.Mui-focused": {
                      color: "#1d2d46",
                    },
                    "&.MuiInputLabel-shrink": {
                      color: "#1d2d46",
                      transform: "translate(14px, -9px) scale(0.85)",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    "& fieldset": {
                      borderColor: "#e2e8f0",
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#3d5070",
                      boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.1)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1d2d46",
                      borderWidth: "2px",
                      boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#0f172a",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    padding: "16px 14px",
                  },
                }}
              />

              {/* Message */}
              <TextField
                fullWidth
                multiline
                rows={5}
                label="Your Message"
                name="message"
                variant="outlined"
                InputLabelProps={{
                  sx: {
                    color: "#64748b",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    "&.Mui-focused": {
                      color: "#1d2d46",
                    },
                    "&.MuiInputLabel-shrink": {
                      color: "#1d2d46",
                      transform: "translate(14px, -9px) scale(0.85)",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    "& fieldset": {
                      borderColor: "#e2e8f0",
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#3d5070",
                      boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.1)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1d2d46",
                      borderWidth: "2px",
                      boxShadow: "0 0 0 4px rgba(29, 45, 70, 0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#0f172a",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    padding: "16px 14px",
                  },
                }}
              />

              {/* Button */}
              <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  endIcon={<SendIcon sx={{ fontSize: "1.2rem" }} />}
                  sx={{
                    background: "linear-gradient(135deg, #1d2d46 0%, #3d5070 100%)",
                    color: "#ffffff",
                    padding: { xs: "14px 32px", md: "16px 40px" },
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    textTransform: "none",
                    letterSpacing: "0.5px",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(29, 45, 70, 0.3)",
                    minWidth: { xs: "100%", sm: "200px" },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                      transition: "left 0.7s ease",
                    },
                    "&:hover": {
                      background: "linear-gradient(135deg, #3d5070 0%, #1d2d46 100%)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 35px rgba(29, 45, 70, 0.5)",
                      "&::before": {
                        left: "100%",
                      },
                    },
                    "&:active": {
                      transform: "translateY(-1px)",
                      boxShadow: "0 5px 20px rgba(29, 45, 70, 0.4)",
                    },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Grid>
  </Grid>
</Container>
 <Stack 
      direction={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 3, md: 6 }}
      sx={{
        p: { xs: 3, sm: 4, md: 5 },
        background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
        borderRadius: { xs: '20px', md: '24px' },
        border: '2px solid rgba(29, 45, 70, 0.08)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 80%, rgba(29, 45, 70, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(61, 80, 112, 0.05) 0%, transparent 50%)
          `,
          zIndex: 0,
        },
      }}
    >
      {/* Rocket Image Container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: '100%', md: '40%' },
          mb: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            transform: 'translateY(-0.648212px) translateZ(0px)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px) translateZ(0px)',
            },
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              color: 'transparent',
            }}
          >
            <Box
              component="img"
              alt="rocket"
              src="src/assets/rocket.png"
              sx={{
                width: { xs: '200px', sm: '250px', md: '280px' },
                height: 'auto',
                maxWidth: '100%',
                display: 'block',
                filter: 'drop-shadow(0 10px 20px rgba(29, 45, 70, 0.15))',
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Content Container */}
      <Box
        sx={{
          flex: 1,
          width: { xs: '100%', md: '60%' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h2"
          sx={{
            color: '#1d2d46',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            fontWeight: 800,
            lineHeight: 1.3,
            mb: 2,
            background: 'linear-gradient(135deg, #1d2d46 0%, #3d5070 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Your queries and feedback
          <br />
          are important to us
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            color: '#5a6c7d',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            fontWeight: 400,
            mb: { xs: 3, sm: 4 },
          }}
        >
          we look forward to assisting you.
        </Typography>
          
        {/* Buttons Container
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          sx={{ mt: 3 }}
        >
          {/* Contact Us Button 
          <Button
            variant="contained"
            size="large"
            href="/contact-us"
            rel="noopener"
            sx={{
              background: 'linear-gradient(135deg, #1d2d46 0%, #3d5070 100%)',
              color: '#ffffff',
              padding: { xs: '12px 24px', sm: '14px 32px' },
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: { xs: '0.95rem', sm: '1rem' },
              textTransform: 'none',
              minWidth: { xs: '100%', sm: '180px' },
              boxShadow: '0 10px 30px rgba(29, 45, 70, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background: 'linear-gradient(135deg, #3d5070 0%, #1d2d46 100%)',
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 35px rgba(29, 45, 70, 0.4)',
              },
              '&:active': {
                transform: 'translateY(-1px)',
                boxShadow: '0 5px 20px rgba(29, 45, 70, 0.3)',
              },
            }}
          >
            Contact us
          </Button>

          {/* Schedule Meeting Button 
          <Button
            variant="outlined"
            size="large"
            href="/schduleForm"
            rel="noopener"
            //  endIcon={<ArrowForwardIcon />}
            sx={{
              color: '#1d2d46',
              borderColor: 'rgba(29, 45, 70, 0.3)',
              borderWidth: '2px',
              padding: { xs: '12px 24px', sm: '14px 32px' },
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: { xs: '0.95rem', sm: '1rem' },
              textTransform: 'none',
              minWidth: { xs: '100%', sm: '200px' },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                borderColor: '#1d2d46',
                backgroundColor: 'rgba(29, 45, 70, 0.05)',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 25px rgba(29, 45, 70, 0.1)',
              },
              '&:active': {
                transform: 'translateY(-1px)',
              },
              '& a': {
                color: 'inherit',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              },
            }}
          >
            <Box component="a" href="/schduleForm" className="link">
              Schedule meeting
            </Box>
          </Button>
        </Stack> */}
      </Box>
    </Stack>
    </Box>
    
  );
};

export default Contact;