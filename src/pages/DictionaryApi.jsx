import React, { useState } from 'react';
import SearchButton from '../components/SearchButton'
import SearchTextField from '../components/TextField';
import '../static/css/styles.css';
import '../static/css/dictionaryapi.css';
import '../static/css/mui.css';


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
      <SearchTextField word={word} handleWordChange={handleWordChange} handleSearch={handleSearch} />
        <SearchButton isLoading={isLoading} isButtonLoading={isButtonLoading} />
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
