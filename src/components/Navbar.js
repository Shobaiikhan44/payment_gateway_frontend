import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff", // White background
        color: "#000",           // Black text/icons
        boxShadow: "none",       // Remove shadow if desired
      }}
    >
      <Toolbar>
        {/* Logo Image */}
        <Box
          component="img"
          sx={{ height: 40, marginRight: 2 }}
          alt="Logo"
          src="/images/logoo.png"  // <-- Update this path
        />

        {/* Left-Side Buttons */}
        <Button size="medium">Discover</Button>
        <Button 
          endIcon={<ArrowDropDownIcon />}
        > 
          Explore 
        </Button>

        {/* Spacer to push items to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right-Side Buttons (Sign Up & Sign In) */}
        <Button variant="outlined" sx={{ marginRight: 1 }}>Sign In</Button>
        <Button variant="contained" color="primary">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
