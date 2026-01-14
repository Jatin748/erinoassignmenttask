import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import { appTheme } from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // strict mode causes double useEffect calls in dev mode
  // <React.StrictMode>
  <ThemeProvider theme={appTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);


