import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Fonts
import './fonts/IntervogueSoftBold.otf'
import './fonts/IntervogueSoftRegular.otf'
import './fonts/IntervogueSoftUltra.otf'
import './fonts/theboldfont.ttf'
import GlobalStyle from './GlobalStyles.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

