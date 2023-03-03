import React from "react";
import MUITextField from "../components/TextField";
import MUIButton from "../components/MUIButton";
import { Box, Container, Typography, TextField, Button } from "@mui/material";


function Contact() {
  const sxStyleBox = { width: "900px", mb: 2 }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.querySelector("form#ContactForm");
    const formData = new FormData(form);
    const data = {};
    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1];
    }
    console.log(data);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      console.log("Email sent successfully");
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending email", error);
      alert("Error sending email");
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5, height: "80vh" }}>
        <Box>
          <Typography variant="h4" sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
            Contact Me
          </Typography>
          <Typography variant="body1">
            Contact Page, type in your name, email, subject, and message. 
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            I"ll get back you to you as soon as I can!
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <form id="ContactForm" onSubmit={handleSubmit}>
            <Box sx={ sxStyleBox }>
              <MUITextField id="name" label="Name" name="name" type="text" required />
            </Box>
            <Box sx={ sxStyleBox }>
              <MUITextField id="email" label="Email" name="email" type="email" required />
            </Box>
            <Box sx={ sxStyleBox }>
              <MUITextField id="subject" label="Subject" name="subject" type="text" required />
            </Box>
            <Box sx={ sxStyleBox }>
              <MUITextField id="message" label="Message" name="message" multiline rows={5} required />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ mr: 2 }}>
                <MUIButton type="submit">
                  Send
                </MUIButton>
              </Box>
              <Box sx={{ ml: 2 }}>
                <MUIButton  type="reset">
                  Clear
                </MUIButton>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Contact;
