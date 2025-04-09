import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // <-- Import BrowserRouter here
import App from './App'; // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>  {/* Only wrap your app in BrowserRouter here */}
    <App />
  </Router>
);