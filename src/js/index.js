import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../scss/app.scss';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

document.addEventListener('click', () => {
  if (document.getElementById('navbar-toggler').classList.contains('show')) {
    document.getElementById('hamburger').click();
  }
});
