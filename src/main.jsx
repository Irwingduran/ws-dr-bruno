import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import SocialMediaButtons from './components/SocialMediaButtons.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SocialMediaButtons/>
  </React.StrictMode>
);
