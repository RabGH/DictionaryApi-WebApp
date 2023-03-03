import React, { useState } from 'react';
import SearchButton from '../components/SearchButton'
import SearchTextField from '../components/SearchTextField';
import { Box, Container, Typography, Fade, List, ListItem, ListItemText }from '@mui/material';

function DictionaryApi() {
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const fetchData = (word) => {
    setIsLoading(true);
    setIsButtonLoading(true);
    fetch(`http://localhost:5000/api/info?word=${word}`, {
        credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setWordData(data);
        setIsLoading(false);
        setIsButtonLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        setIsButtonLoading(false);
      });
  };

  return (
    <Box sx={{ mr:2 }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <Box sx={{ flexGrow: 1 }}>
              <form onSubmit={(e) => e.preventDefault()}>
                  <SearchTextField word={word} handleWordChange={handleWordChange} />
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, }}>
                  <SearchButton handleClick={() => fetchData(word)} isLoading={isLoading} isButtonLoading={isButtonLoading} />
                </Box>
              </form>
          </Box>
      </Box>
      {!isLoading && wordData && (
        <Fade in={true}>
          <Box sx={{ mt:2,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     ml: 4, 
                     }}>
            <Box sx={{ mb:1 }}>
            <Typography variant='h4'>
              {wordData.word}
            </Typography>
            <Typography variant='body1' sx={{ color: '#FF7F50',
                                              fontStyle: 'italic',
                                              mr: 1 
                                            }}>
                        ({wordData.part_of_speech})
            </Typography>
            </Box>
          <List sx={{ mt: 1, mb: 1, maxHeight: '550px' }}>
            {wordData.definitions.map((definition, index) => (
              <ListItem key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Typography sx={{ fontWeight: 'bold', mr: 1, color: '#fc5185', }}>
                        {index + 1}. 
                    </Typography>
                  <ListItemText
                    primary={
                      <Typography sx={{ color: '#00FFFF', ml: 1 }}>
                        {definition.charAt(0).toUpperCase() + definition.slice(1)}
                      </Typography>
                    }
                    sx={{ display: 'flex', alignItems: 'flex-start' }}
                  />
              </ListItem>
            ))}
          </List>
          {wordData.synonyms && (
            <Typography variant='body1' sx={{ 
                                         fontStyle: 'italic',                            
                                         display: 'flex',
                                         padding: '1rem', 
                                        }}>
              <Typography sx={{ 
                            fontWeight: 'bold', 
                            color:"#fc5185", mr: 1 
                          }}> Synonyms: </Typography>
              <Typography sx={{ display: 'inline-flex' }}>
              {wordData.synonyms.map((synonym, index) => (
                <React.Fragment key={synonym}>
                  <Typography sx={{ color: '#FF7F50' }}>
                    {index !== 0 && ", "}
                    {synonym
                      .split(' ')
                      .map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1))
                      .join(' ')}
                  </Typography>
                </React.Fragment>   
              ))}
            </Typography> 
          </Typography>
          )}
          </Box>
        </Fade>
        )}
      </Container>
    </Box>
  );
};

export default DictionaryApi;

