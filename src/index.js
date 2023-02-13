import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './App';
import "./locales/i18next.js";
import "./assets/style/global.scss"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);


