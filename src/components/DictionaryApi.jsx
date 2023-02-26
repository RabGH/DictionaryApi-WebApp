import React, { useState } from 'react';
import axios from 'axios';
import Output from './Output';

function DictionaryApi() {
  const [wordData, setWordData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (word) => {
    setIsLoading(true);
    axios.get(`/api/definition?word=${word}`)
      .then(response => {
        setWordData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Output
        wordData={wordData}
        isLoading={isLoading}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default DictionaryApi;
