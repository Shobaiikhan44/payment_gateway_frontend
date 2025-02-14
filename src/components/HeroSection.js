import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", // Aligns content to the left
        height: "100vh",
        backgroundImage: "url('/images/pic.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        paddingLeft: "100px", // Adjust left padding for positioning
      }}
    >
      <Box sx={{ maxWidth: "600px" }}> {/* Limits text width */}
        <Typography variant="h3" gutterBottom>
          Pricing that suits you
        </Typography>
        <Typography variant="subtitle1">
          With enriched experiences through our vast collection of media spanning various genres, topics, and formats, to empower individuals with knowledge, inspiration, and entertainment. We believe that access to quality content is essential for personal growth and cultural enrichment.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
