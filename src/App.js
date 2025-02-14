import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import PricingToggle from "./components/PricingToggle";
import PricingCards from "./components/PricingCards";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

const App = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContactForm />
      <Container>
        <PricingToggle setPlan={setPlan} />
        <PricingCards plan={plan} sx={{background: '#D9D9D9'}} />
        <FAQSection />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
