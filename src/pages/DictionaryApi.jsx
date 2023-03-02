import React, { useState } from 'react';
import SearchButton from '../components/SearchButton'
import SearchTextField from '../components/SearchTextField';
import { Box, Container, Typography, Fade }from '@mui/material';
// import { dictBox1, dictBox2, dictBox3, dictBox4, dictBox5 } from './../styles/home';
// import { dictSpan1, dictSpan2, dictSpan3 } from './../styles/home';
// import { typographyDict1, typographyDict2, typographyDict3 } from './../styles/home';

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
        <Box sx={{ display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center', 
                   }}>
          <Typography variant="h4" sx={{ mr: 2 }}>

          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <SearchTextField word={word} handleWordChange={handleWordChange} />
            <Box sx={{ display: 'flex',
                       justifyContent: 'center',
                       mt: 2, 
                       }}>
              <SearchButton handleClick={() => fetchData(word)} isLoading={isLoading} isButtonLoading={isButtonLoading} />
            </Box>
          </form>
        </Box>
      </Box>
      {!isLoading && wordData && (
        <Fade in={true}>
          <Box sx={{ mt:2 }}>
            <Typography variant='h5' sx={{ mb:1 }}>
            <span>{wordData.word}</span>
            <span sx={{ ml: 1,
                        fontStyle: 'italic', 
                        }}>
                        ({wordData.part_of_speech})
            </span>
        </Typography>
        <ol>
          {wordData.definitions.map((definition, index) => (
            <li key={index}>
              <Typography variant='body1' sx={{ display: 'flex',
                                                alignItems: 'center',
                                                mb: 1, 
                                                }}>
                <span sx={{ fontWeight: 'bold',
                            mr: 1, 
                            }}>
                            {index + 1}. 
                            </span>
                <span>{definition.charAt(0).toUpperCase() + definition.slice(1)}</span>
              </Typography>
            </li>
          ))}
        </ol>
        {wordData.synonyms && (
          <Typography variant='body1' sx={{ fontStyle: 'italic' }}>
            <span sx={{ fontWeight: 'bold' }}>Synonyms: </span> 
            {wordData.synonyms.join(', ')}
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

