import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
  Paper,
  InputAdornment,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useEffect } from "react";

const ScheduleForm = () => {
  useEffect(() => {
    document.title = "ScheduleForm | BiggBrains";
  }, []);

  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        bgcolor: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", md: "center" },
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 4, md: 6 },
        mt: { xs: "4rem", md: "6rem" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 650, md: 900 },
          bgcolor: "#fff",
          borderRadius: { xs: "18px", md: "32px" },
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          p: { xs: 2.5, sm: 4, md: 6 },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            bgcolor: "#f1f5ff",
            borderRadius: { xs: "16px", md: "28px" },
            py: { xs: 3, md: 5 },
            px: { xs: 2, md: 3 },
            textAlign: "center",
            mb: { xs: 3, md: 5 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              fontWeight: 900,
            }}
            gutterBottom
          >
            Schedule Your Appointment
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
              color: "text.secondary",
            }}
          >
            Fill in your details below and let us know your availability.
          </Typography>
        </Box>

        {/* Form */}
        <Stack spacing={{ xs: 2, md: 3 }}>
          {/* Name row */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField fullWidth placeholder="First Name" size="medium" />

            <TextField fullWidth placeholder="Last Name" size="medium" />
          </Stack>

          {/* Email */}
          <TextField fullWidth placeholder="Email Address" />

          {/* Date & Time */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              placeholder="dd/mm/yyyy"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarMonthIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              placeholder="--:-- --"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTimeIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          {/* Message */}
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Message (Optional)"
          />

          {/* Button */}
          <Box textAlign="center" mt={{ xs: 2, md: 3 }}>
            <Button
              sx={{
                bgcolor: "#4CAF50",
                px: { xs: 4, md: 6 },
                py: { xs: 1.4, md: 1.8 },
                borderRadius: "28px",
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 600,
                minWidth: { xs: 140, md: 180 },
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#43a047",
                },
              }}
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ScheduleForm;
