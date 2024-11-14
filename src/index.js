import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Only wrap here
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Router> {/* Only use Router here */}
      <App />
    </Router>
  );
} else {
  console.error("Root element not found.");
}
