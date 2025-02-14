import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What types of content are included in the subscription?",
    answer:
      "Our subscription offers access to a wide range of digital content, including eBooks, audiobooks, videos, online courses, and more. We regularly update our library to provide diverse and engaging content for our subscribers.",
  },
  { question: "Can I cancel my subscription at any time?", answer: "Yes, you can cancel your subscription at any time." },
  { question: "Are there any limitations on the number of devices I can use with my subscription?", answer: "No, you can access your subscription on multiple devices." },
  { question: "Do you offer a free trial for new subscribers?", answer: "Yes, we offer a 7-day free trial for new subscribers." },
  { question: "Are there any hidden fees or additional charges with the subscription?", answer: "No, there are no hidden fees or additional charges." },
  { question: "Can I upgrade or downgrade my subscription plan?", answer: "Yes, you can change your subscription plan anytime." },
  { question: "Is there a student or military discount available?", answer: "Yes, we offer special discounts for students and military personnel." },
];

const FAQSection = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Q & A
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button variant="contained" sx={{ mt: 2, bgcolor: "#4A00E0" }}>
        Explore More FAQs
      </Button>
    </Container>
  );
};

export default FAQSection;
