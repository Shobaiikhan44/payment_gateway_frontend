import React from "react";
import { Box, TextField, Button, Paper } from "@mui/material";

const ContactForm = () => {
  return (
    <Paper elevation={3} sx={{ padding: 3, width: 300, position: "absolute", right: 20, top: 20 }}>
      <TextField fullWidth label="Name" margin="dense" />
      <TextField fullWidth label="Email" margin="dense" />
      <TextField fullWidth label="Message" margin="dense" multiline rows={3} />
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Submit</Button>
    </Paper>
  );
};

export default ContactForm;
