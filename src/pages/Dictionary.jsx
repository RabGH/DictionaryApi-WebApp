import React, { useState } from 'react';
import '../static/css/styles.css';

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/info?word=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults && (
        <div>
          <h2>{searchResults.word}</h2>
          <p>{searchResults.meaning}</p>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
