import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

const PricingCards = ({ plan }) => {
  const pricingData = {
    monthly: [
      { title: "Individual Creator", price: "$30", features: ["Premium Images", "Premium Vectors"] },
      { title: "Team Collaborator", price: "$100", features: ["Premium Images", "Premium Vectors", "Animation Templates"] },
    ],
    annual: [
      { title: "Individual Creator", price: "$300", features: ["Premium Images", "Premium Vectors"] },
      { title: "Team Collaborator", price: "$1000", features: ["Premium Images", "Premium Vectors", "Animation Templates"] },
    ],
  };

  return (
    <Grid container spacing={2}>
      {pricingData[plan].map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="h4">{item.price}</Typography>
              <ul>
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button variant="contained">Buy Now</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PricingCards;
