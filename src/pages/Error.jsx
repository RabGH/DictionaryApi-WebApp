import React from "react";
import MUIButton from "../components/buttons/MUIButton";
import { Container, Box, Typography } from "@mui/material";

function Error() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        height: "80vh",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{ mb: 2, display: "flex", justifyContent: "center", mt: 1 }}
        >
          Error
        </Typography>
        <Typography
          variant="body1"
          sx={{ display: "flex", justifyContent: "center", mt: 1 }}
        >
          The word you are looking for doesn"t exist! Or if it"s another error,
          please contact us.
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", mt: 5 }}>
            <Box sx={{ mr: 5 }}>
              <MUIButton
                variant="outlined"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Home
              </MUIButton>
            </Box>
            <Box sx={{ ml: 5 }}>
              <MUIButton
                onClick={() => {
                  window.location.href = "/contact/";
                }}
              >
                Contact
              </MUIButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

export default Error;
