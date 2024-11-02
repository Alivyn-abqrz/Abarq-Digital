// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"YourCustomFont", sans-serif',
    },
  },
});

// Create a root
const container = document.getElementById('root');
const root = createRoot(container); // Create root

// Render the application using the new API
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
