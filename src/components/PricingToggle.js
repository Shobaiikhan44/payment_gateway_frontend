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
    <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
      <ToggleButton value="monthly">Monthly Payment</ToggleButton>
      <ToggleButton value="annual">Annual Payment</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default PricingToggle;
