import React from 'react';
import ReactDOM from 'react-dom/client';
import {  HashRouter } from 'react-router-dom'
import './index.scss';
import Home from './Pages/Home';
import { ThemeProvider, ColorProvider } from './Utils/Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <ThemeProvider>
        <ColorProvider>
        <HashRouter>
             <Home />
        </HashRouter>
        </ColorProvider>
      </ThemeProvider>
    
  </React.StrictMode>
);


