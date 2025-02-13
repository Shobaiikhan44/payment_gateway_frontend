import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "50px", backgroundImage: "url('/path-to-image.jpg')", color: "white" }}>
      <Typography variant="h3">Pricing that suits you</Typography>
      <Typography variant="subtitle1">Choose a plan that fits your needs.</Typography>
    </Box>
  );
};

export default HeroSection;
