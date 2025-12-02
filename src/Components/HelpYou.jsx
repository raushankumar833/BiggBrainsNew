import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PaymentsIcon from "@mui/icons-material/Payments";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import QrCodeIcon from "@mui/icons-material/QrCode";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import * as motion from "motion/react-client";


export default function HelpYou() {
  const services = [
    {
      icon: <ReceiptLongIcon sx={{ fontSize: 32, color: "#6a1b9a" }} />,
      title: "BBPS (Bharat Bill Payment System)",
      description:
        "Pay credit card, electricity, and utility bills instantly and securely.",
    },
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 32, color: "#6a1b9a" }} />,
      title: "Domestic Money Transfer",
      description: "Transfer money across India with ease and reliability.",
    },
    {
      icon: <SmartphoneIcon sx={{ fontSize: 32, color: "#6a1b9a" }} />,
      title: "Mobile & FASTag Recharge",
      description: "Quick recharge for mobiles and FASTags anytime, anywhere.",
    },
    {
      icon: <PaymentsIcon sx={{ fontSize: 32, color: "#6a1b9a" }} />,
      title: "Cash Management Services (CMS)",
      description:
        "Streamlined cash collection and management solutions for businesses.",
    },
    {
      icon: <ConfirmationNumberIcon sx={{ fontSize: 32, color: "#6a1b9a" }} />,
      title: "Travel Booking",
      description:
        "Hassle-free booking for IRCTC trains, buses, flights, and hotels.",
    },
    {
      icon: <VpnKeyIcon sx={{ fontSize: 32, color: "#6a1b9a" }} />,
      title: "AEPS",
      description:
        "Secure cash withdrawal, balance inquiry, and transactions using Aadhaar authentication.",
    },
    {
      icon: <QrCodeIcon sx={{ fontSize: 32, color: "#6a1b9a" }} />,
      title: "UPI Payments",
      description:
        "Seamless and instant UPI transactions for customers and businesses.",
    },
    {
      icon: <CreditCardIcon sx={{ fontSize: 32, color: "#6a1b9a" }} />,
      title: "Micro ATM (mATM)",
      description:
        "Enable cash withdrawal and balance inquiry using debit cards at retail points.",
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "#f9f9fb" }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <motion.div animate={{ y: [-100, 0] }} transition={{ duration: 0.5 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: "#1a1a66", mb: 2 }}
            >
              How P2PAE Can Help You?
            </Typography>
          </motion.div>
          <Button
            variant="outlined"
            sx={{
              px: 4,
              py: 1.5,
              borderColor: "#2e1a63",
              color: "#2e1a63",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": { borderColor: "#6a1b9a", color: "#6a1b9a" },
            }}
          >
            Explore All Services →
          </Button>
        </Box>

        {/* Gradient wrapper */}
        <Box
          sx={{
            p: 4,
            borderRadius: 6,
            background:
              "linear-gradient(135deg, #fdfbfb 0%, #ebdefa 50%, #fbeafc 100%)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
          }}
        >
          {/* CSS Grid: 4 columns at md and up (=> 2 rows for 8 items) */}
          <Box
            sx={{
              display: "grid",
              gap: 4, // spacing between cards (theme spacing units)
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)", // mobile: 1 column
                sm: "repeat(2, 1fr)", // small: 2 columns
                md: "repeat(4, 1fr)", // medium and up: 4 columns (this yields 2 rows for 8 items)
              },
              alignItems: "stretch",
            }}
          >
            {services.map((service, index) => (
              <Box key={index} sx={{ display: "flex", height: "100%" }}>
                <Card
                  sx={{
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* icon circle */}
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        backgroundColor: "#f3e5f5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: "#2e1a63",
                        mb: 1,
                        textAlign: "center",
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        textAlign: "center",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
