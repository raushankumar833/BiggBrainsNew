import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f9fafb",
        pt: 6,
        pb: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Logo */}
      <Box
        component="img"
        src="src/assets/BiggBrainsLogo.svg"
        alt="Background Logo"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.03,
          height: { xs: "200px", md: "300px", lg: "400px" },
          width: "auto",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            mb: 4,
          }}
        >
          {/* Logo and Disclaimer Section */}
          <Box
            sx={{
              gridColumn: { xs: "1", sm: "span 2", md: "span 1" },
              textAlign: { xs: "center", sm: "left" },
              ml: 4,
            }}
          >
            <Box
              component="img"
              src="src/assets/BiggBrainsLogo.svg"
              alt="BiggBrains"
              sx={{
                height: { xs: 60, md: 80 },
                mb: 3,
              }}
            />
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <IconButton
                sx={{
                  color: "#1877f2",
                  "&:hover": { backgroundColor: "rgba(24, 119, 242, 0.08)" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "#1da1f2",
                  "&:hover": { backgroundColor: "rgba(29, 161, 242, 0.08)" },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "#0077b5",
                  "&:hover": { backgroundColor: "rgba(0, 119, 181, 0.08)" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>

          {/* BiggBrains Section */}
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                color: "#140a53",
                mb: 2,
              }}
            >
              BiggBrains
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="#"
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#666",
                  textDecoration: "none",
                  "&:hover": { color: "#070a72ff" },
                }}
              >
                About us
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#666",
                  textDecoration: "none",
                  "&:hover": { color: "#070a72ff" },
                }}
              >
                Contact us
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#666",
                  textDecoration: "none",
                  "&:hover": { color: "#070a72ff" },
                }}
              >
                FAQs
              </Link>
            </Box>
          </Box>

          {/* Legal Section */}
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                color: "#140a53",
                mb: 2,
              }}
            >
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="#"
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#666",
                  textDecoration: "none",
                  "&:hover": { color: "#070a72ff" },
                }}
              >
                Terms and Condition
              </Link>
              <Link
                href="#"
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#666",
                  textDecoration: "none",
                  "&:hover": { color: "070a72ff" },
                }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Box>

          {/* Contact Section */}
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
              gridColumn: { xs: "1", sm: "span 2", md: "span 1" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                color: "#140a53",
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="mailto:Support@BiggBrains.com"
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#666",
                  textDecoration: "none",
                  "&:hover": { color: "#070a72ff" },
                }}
              >
                tms@biggbrains.com
              </Link>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#666",
                }}
              >
                7011256694
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#666",
                  lineHeight: 1.6,
                }}
              >
                Plot No. 8 Pocket, 6, Sector 22, Rohini, Delhi, 110086
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Copyright and Link */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // ✅ stack vertically
            alignItems: "center", // ✅ horizontal center
            justifyContent: "center",
            pt: 3,
            borderTop: "1px solid #e0e0e0",
            textAlign: "center", // ✅ center text
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", md: "0.7rem" },
              lineHeight: 1.5,
              color: "#140a53",
              fontFamily: "sans-serif",
              maxWidth: 700, // ✅ keeps line readable
            }}
          >
            Disclaimer: Any dispute arising under these terms and conditions
            shall be subject to the jurisdiction of the courts of Delhi.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "13px", md: "14px" },
              color: "#666",
            }}
          >
            © 2025 All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
