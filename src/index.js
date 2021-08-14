import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
