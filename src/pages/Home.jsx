import React from "react";
import DictionaryApi from "./DictionaryApi.jsx";
import { Container, Typography, Box } from "@mui/material";

function Home() {
  return (
    <Container sx={{ height: "100vh" }} maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 4.5,
        }}
      >
        <Typography variant="h4" component="div" sx={{ mb: 2 }}>
          Welcome to Dictionary
        </Typography>

        <Typography variant="body1" component="div">
          This is an API that takes a word as a key and return its definition as
          a value.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <DictionaryApi />
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
