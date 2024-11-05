import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Tailwind and other styles
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { StockProvider } from './StockContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
