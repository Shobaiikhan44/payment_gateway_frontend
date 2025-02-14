import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold">Resources</Typography>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Stock Photos Collection</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Editorials</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Featured Collection</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Premium</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Trending</Link>
          </Grid>
          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold">Our Company</Typography>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>About Us</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Pricing</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Coupons</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Contact Us</Link>
          </Grid>
          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold">Legal</Typography>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Terms of Use</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Terms of Service</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Privacy Policy</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Patents</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Cookie Policy</Link>
          </Grid>
          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold">Earn</Typography>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Affiliate Partner Benefits</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Shop Benefits</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Become an Ambassador</Link>
          </Grid>
          {/* Column 5 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold">Packages</Typography>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Enterprise Package</Link>
            <Link href="#" sx={{ color: "inherit", textDecoration: "none", display: "block" }}>Agency Packages</Link>
          </Grid>
          {/* Column 6 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold">Languages</Typography>
            <Typography variant="body2">AR DE EN ES</Typography>
            <Typography variant="body2">FR ID IT JA</Typography>
            <Typography variant="body2">KD NL PL PT</Typography>
            <Typography variant="body2">SV TH</Typography>
          </Grid>
        </Grid>

        {/* Logo Image */}
        <Box mt={4} textAlign="">
          <Box component="img" sx={{ height: 40, mb: 2 }} alt="Logo" src="/images/logoo.png" />
        </Box>
        <Typography textAlign = 'end'>Sign up for a free account today and start exploring ourImage Content Library.  Whether 
          you're working on a professional <br/>project, sprucing up your personal blog, or simply seeking visual inspiration, we've got you covered</Typography>

        {/* Copyright */}
        <Box mt={2} textAlign="center">
          <Typography variant="body3" color="gray">
            Copyright © 2024 Harry Photo, All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
