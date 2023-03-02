import React from 'react';
import DictionaryApi from './DictionaryApi.jsx';
import { Container, Typography, Box } from '@mui/material';
import { boxHome1, boxHome2, typographyHome1 } from '../styles/home';


function Home() {
  return (
  <>
    <Container maxWidth="md">
      <Box sx={{ boxHome1 }}>
          <Typography variant='h3' component='div' sx={{ typographyHome1 }}>
            Welcome to Dictionary
          </Typography>

          <Typography variant='body1' component='div'>
            This is an API that takes a word as a key and return its definition as a value. 
          </Typography>
          
          <Box sx={{ boxHome2 }}>
            <DictionaryApi />
          </Box>
      </Box>
    </Container>
  </>
  );
}

export default Home;
