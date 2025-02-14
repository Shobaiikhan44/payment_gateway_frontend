import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";

const pricingData = [
  {
    title: "Individual Creator",
    subtitle: "Buy for yourself, pay monthly or per year",
    features: [
      "Access our pixel-perfect SVG icons",
      "Unlimited projects & page views",
      "Mac/Windows App",
      "Free lifetime updates",
    ],
    options: [
      { name: "Premium Images", price: "$300", details: "160 images  |  HD Resolution" },
      { name: "Premium Vectors", price: "$450", details: "150 Vectors  |  Infinite Resolution" },
      { name: "Premium Icons", price: "$99", details: "150 Vectors  |  Infinite Resolution" },
      { name: "Animation Templates", price: "$899", details: "50 Templates  |  2K Resolution" },
    ],
  },
  {
    title: "Team Collaborator",
    subtitle: "Buy for yourself, pay monthly or per year",
    features: [
      "Access our pixel-perfect SVG icons",
      "Unlimited projects & page views",
      "Mac/Windows App",
      "Free lifetime updates",
    ],
    options: [
      { name: "Premium Images", price: "$1000", details: "700 images  |  HD Resolution" },
      { name: "Premium Vectors", price: "$1500", details: "550 Vectors  |  Infinite Resolution" },
      { name: "Premium Icons", price: "$350", details: "650 Vectors  |  Infinite Resolution" },
      { name: "Animation Templates", price: "$2699", details: "240 Templates  |  2K Resolution" },
    ],
  },
];

const PricingCards = () => {
  const [selected, setSelected] = useState({
    Individual: "Premium Images",
    Team: "Premium Images",
  });

  const handleSelect = (plan, option) => {
    setSelected((prev) => ({ ...prev, [plan]: option }));
  };

  return (
    <Grid container spacing={3} justifyContent="center" >
      {pricingData.map((plan, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card sx={{ padding: 3, borderRadius: 3, marginTop: '20px' , boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4F4F4F" }}>
                {plan.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#828282", marginBottom: 2 }}>
                {plan.subtitle}
              </Typography>
              
              {/* Feature List */}
              <ul style={{ paddingLeft: "16px", marginBottom: "20px" }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ color: "#333", fontSize: "14px" }}>{feature}</li>
                ))}
              </ul>

              {/* Options Selection */}
              <RadioGroup value={selected[plan.title]} onChange={(e) => handleSelect(plan.title, e.target.value)}>
                {plan.options.map((option, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px",
                      borderRadius: "8px",
                      border: selected[plan.title] === option.name ? "2px solid #6A00FF" : "1px solid #E0E0E0",
                      backgroundColor: selected[plan.title] === option.name ? "#F7F3FF" : "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    <FormControlLabel value={option.name} control={<Radio color="primary" />} label={
                      <Typography sx={{ fontWeight: 600 }}>{option.name}</Typography>
                    } />
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>{option.price}</Typography>
                  </Box>
                ))}
              </RadioGroup>

              {/* Buy Button */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#6A00FF",
                  color: "#fff",
                  padding: "12px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                Buy Premium Images
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PricingCards;
