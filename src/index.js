import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';

let container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HashRouter basename='/app'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
