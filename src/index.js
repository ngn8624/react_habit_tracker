import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/js/all.js';
import './index.css';
import App from './app';
import SimpleHabit from './components/simpleHabit'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <SimpleHabit /> */}
  </React.StrictMode>
);

