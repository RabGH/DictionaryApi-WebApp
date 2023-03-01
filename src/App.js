import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import MUI from './components/ThemeProvider';
import './static/css/styles.css';
import Header from './components/Header';

function App() {
    return (
      <BrowserRouter>
          <MUI>
            <Header />
            <AppRoutes />
          </MUI>
       </BrowserRouter>
    );
}

export default App;
