import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';


/* Importing fonts */
// sans-serif
import "@fontsource/outfit";
import "@fontsource/roboto";
// serif
import "@fontsource/roboto-slab";
import "@fontsource/libre-baskerville";
import "@fontsource/playfair-display";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);