import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './Pages/Home';
import { ThemeProvider } from './Utils/Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
    
  </React.StrictMode>
);


