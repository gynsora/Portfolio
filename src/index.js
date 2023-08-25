import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss';
import Home from './Pages/Home';
import { ThemeProvider, ColorProvider } from './Utils/Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <ColorProvider>
        <Routes>
              <Route path="/" element={<Home />} />
        </Routes>
        </ColorProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);


