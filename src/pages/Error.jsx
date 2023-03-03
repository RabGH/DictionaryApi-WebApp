import React from 'react';
import MUIButton from '../components/MUIButton';
import { Container, Box, Typography } from '@mui/material';

function Error() {
  return (
  <>
      <Container maxWidth='md' sx={{ display: 'flex', alignItems: 'center' }}>

        <Box>
          <Typography>
            Error
          </Typography>

          <Typography>
            The word you are looking for doesn't exist! Or if it's another error, please contact us.
          </Typography>
          <Container>
            
            <MUIButton  onClick={() => {window.location.href='/'}}>
            Home
            </MUIButton>

            <MUIButton onClick={() => {window.location.href='/contact/'}}>
            Contact
            </MUIButton>

          </Container>
        </Box>
      </Container>
  </>
  );
}

export default Error;
