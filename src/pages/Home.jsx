import React, { useState, useEffect } from 'react';
import './static/css/styles.css';
import DictionaryApi from './src/components/DictionaryApi.jsx';
import Header from './src/components/Header.jsx';
import Error from './src/components/Error.jsx';

function Output(props) {
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (word) {
      setIsLoading(true);
      DictionaryApi.getDefinition(word)
        .then((data) => {
          setIsLoading(false);
          setWordData(data);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
    }
  }, [word]);

  const handleSearch = (word) => {
    setWord(word);
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Dictionary API</h1>
          <p>This is an API that takes a word as a key and returns its definition as a value</p>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(e.target.elements.word.value);
            }}
          >
            <input className="input" type="text" name="word" placeholder="Enter a word" required />
            <button className="btn" type="submit">
              Search
            </button>
          </form>
          {isLoading && <p>Loading...</p>}
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
                    {definition.capitalize()}
                  </li>
                ))}
              </ol>
              {wordData.synonyms && (
                <p>
                  <strong className="strong">Synonyms:</strong> {wordData.synonyms.join(', ').capitalize()}
                </p>
              )}
            </div>
          )}
        </div>
      </main>
      <footer className="footer">
        <p>
          Dictionary API &copy; 2023{' '}
          <button className="btn btn-contact" onClick={() => (window.location.href = '/contact/')}>
            Contact
          </button>
        </p>
      </footer>
    </>
  );
}

export default Output;
