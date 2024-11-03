import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // This imports Tailwind and other styles
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add a custom div with Tailwind classes as the app wrapper
const AppWrapper = () => (
  <div className="min-h-screen bg-gray-50">
    <App />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

reportWebVitals();
