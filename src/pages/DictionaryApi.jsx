import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import '../static/css/styles.css';


function DictionaryApi() {
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsButtonLoading(true);
    fetchData(word);
  };

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const fetchData = (word) => {
    setIsLoading(true);
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
    <form className="form" onSubmit={handleSearch}>
      <input className="input" type="text" value={word} onChange={handleWordChange} placeholder="Enter a word" required />
      <LoadingButton
        id="search-btn"
        type="submit"
        className="btn loading-btn"
        loading={isLoading}
        loadingIndicator={<CircularProgress style={{ color: '#fc5185' }} />}
        style={{
        backgroundColor: '#333333',
        borderColor: '#fc5185',
        color: isButtonLoading ? 'transparent' : '#fc5185',
        border: isButtonLoading ? 'none' : '1px solid #fc5185',
        }}
      >
        {isButtonLoading ? "" : "Search"}
      </LoadingButton>
      {!isLoading && wordData && (
        <div className="results-container fade-in">
          <h1>
            <span className="word">{wordData.word}</span>
          </h1>
          <span className="pos">{wordData.part_of_speech}</span>
          <ol>
              {wordData.definitions.map((definition, index) => (
                <li key={index}>
                  <span style={{ color: '#fc5185' }}>{index + 1}. </span>
                  {definition.charAt(0).toUpperCase() + definition.slice(1)}
                </li>
              ))}
          </ol>
          {wordData.synonyms && (
            <p>
              <strong className="strong">Synonyms:</strong> {wordData.synonyms.join(', ')}
            </p>
          )}
        </div>
      )}
    </form>
  );
}

export default DictionaryApi;
