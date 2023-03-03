import React, { useState } from 'react';
import SearchButton from '../components/buttons/SearchButton'
import RandomButton from '../components/buttons/RandomButton';
import SearchTextField from '../components/textfields/SearchTextField';
import { Box, Container, Typography, Fade, List, ListItem } from '@mui/material';



function DictionaryApi() {
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleRandomizeClick = () => {
    setIsRandomizing(true);
    fetch('http://localhost:5000/api/random', {
      credentials: 'include'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    })
    .then(data => {
      setWord(data.word);
      setWordData(data);
      setIsLoading(false);
      setIsRandomizing(false);
    })
    .catch(error => {
      console.log(error);
      setIsLoading(false);
      setIsRandomizing(false);
    });
  };

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
                <Box
                 sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mt: 2, 
                   }}>
                  <Box>
                    <SearchButton 
                    handleClick={() => fetchData(word)} isLoading={isLoading} isButtonLoading={isButtonLoading} 
                    sx={{
                       marginRight: '1rem',
                       height: '3rem',
                       width: '8rem',}} label="Search">
                      Search
                    </SearchButton>
                  </Box>
                  <Box>
                    <RandomButton
                     onClick={handleRandomizeClick} isLoading={isLoading} isRandomizing={isRandomizing}
                     sx={{ 
                       color:"#FC5185", 
                       marginLeft: '1rem', 
                       height: '3rem',
                       width: '8rem', }} label="Randomize">
                      Randomize
                    </RandomButton>
                  </Box>
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
          <List sx={{ mb: 1 }}>
            {wordData.definitions.map((definition, index) => (
              <ListItem key={index} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold', mr: 0.1, color: '#fc5185', }}>
                        {index + 1}. 
                    </Typography>
                      <Typography sx={{ ml: 1 }}>
                        {definition.charAt(0).toUpperCase() + definition.slice(1)}
                      </Typography>
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
                  <Typography sx={{ color: 'pink' }}>
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

