import React from 'react';
import DictionaryApi from './DictionaryApi.jsx';
import MUIButton from '../components/MUIButton'
import { Typography } from '@mui/material';


function Home() {
  return (
  <>
    <div className='home-container'>
      <header className="home-header">
          <h1>Dictionary API</h1>
          <p>This is an API that takes a word as a key and returns its definition as a value</p>
      </header>
        <div className='search-container'>
          <DictionaryApi className="search-text-field-pos" />
        </div>
     <footer className="footer">
          Dictionary API &copy; 2023{' '}
          <MUIButton className="btn-contact" onClick={() => (window.location.href = '/contact')}>
            Contact
          </MUIButton>
      </footer>
    </div>
  </>
  );
}

export default Home;
