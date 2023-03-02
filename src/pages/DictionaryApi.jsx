import React, { useState } from 'react';
import SearchButton from '../components/SearchButton'
import SearchTextField from '../components/SearchTextField';
import '../static/css/dictionaryapi.css';
import '../static/css/home.css';


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
    <div>
      <form className="form-main" onSubmit={(e) => e.preventDefault()}>
        <div className='search-field-container'>
          <SearchTextField className="search-text-field-pos" word={word} handleWordChange={handleWordChange} />
        </div>
        <div className='search-btn-container'>
          <SearchButton className="loading-btn" handleClick={() => fetchData(word)} isLoading={isLoading} isButtonLoading={isButtonLoading} />
        </div>
      </form>
      {!isLoading && wordData && (
        <div className="results-container fade-in">
          <h1>
            <span className="results-word">
              {wordData.word}
            </span>
          </h1>
          <span className="results-speech">
            ({wordData.part_of_speech})
          </span>
          <ol>
              {wordData.definitions.map((definition, index) => (
                <li className="list-main" key={index}>
                  <span className='span-main'>{index + 1}. </span>
                  {definition.charAt(0).toUpperCase() + definition.slice(1)}
                </li>
              ))}
          </ol>
          {wordData.synonyms && (
            <p>
              <strong className="results-strong">
                Synonyms:
              </strong> {wordData.synonyms.join(', ')}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default DictionaryApi;
