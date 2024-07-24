import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';

let container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter basename="/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
