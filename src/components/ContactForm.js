import React from "react";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";

const ContactForm = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 500,
        height: 688,
        position: "absolute",
        top: 100,
        left: 1000,
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Centers content horizontally
      }}
    >
      {/* Centered Contact Us Heading */}
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
        Contact Us
      </Typography>

      {/* Form Inputs */}
      <Box sx={{ width: "100%" }}> {/* Ensures inputs take full width */}
        <TextField
          fullWidth
          label="First Name"
          margin="dense"
          sx={{ backgroundColor: "#f5f5f5", borderRadius: 1 }} // Light blank background
        />
        <TextField
          fullWidth
          label="Last Name"
          margin="dense"
          sx={{ backgroundColor: "#f5f5f5", borderRadius: 1 }}
        />
        <TextField
          fullWidth
          label="Email"
          margin="dense"
          sx={{ backgroundColor: "#f5f5f5", borderRadius: 1 }}
        />
        <TextField
          fullWidth
          label="Phone"
          margin="dense"
          sx={{ backgroundColor: "#f5f5f5", borderRadius: 1 }}
        />
        <TextField
          fullWidth
          label="Message"
          margin="dense"
          multiline
          rows={4}
          sx={{ backgroundColor: "#f5f5f5", borderRadius: 1 }}
        />

        {/* Submit Button */}
        <Button variant="contained" color="success" sx={{ marginTop: 2, width: "100%" }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactForm;