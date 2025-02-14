import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const PricingToggle = ({ setPlan }) => {
  const [alignment, setAlignment] = useState("monthly");

  const handleChange = (event, newAlignment) => {
    if (newAlignment) {
      setAlignment(newAlignment);
      setPlan(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "8px",
      
        padding: "40px",
        marginTop : '40px'
      }}
    >
      <ToggleButton
        value="monthly"
        sx={{
          textTransform: "none",
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "",
          backgroundColor: alignment === "monthly" ? "#6A00FF" : "transparent",
          color: alignment === "monthly" ? "#fff" : "#6A00FF",
          "&:hover": {
            backgroundColor: "#6A00FF",
            color: "#fff",
          },
        }}
      >
        Monthly Payment
      </ToggleButton>
      <ToggleButton
        value="annual"
        sx={{
          textTransform: "none",
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: alignment === "annual" ? "#6A00FF" : "transparent",
          color: alignment === "annual" ? "#fff" : "#6A00FF",
          "&:hover": {
            backgroundColor: "#6A00FF",
            color: "#fff",
          },
        }}
      >
        Annual Payment
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default PricingToggle;
