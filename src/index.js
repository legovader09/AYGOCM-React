import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './js/App';
import * as serviceWorkerRegistration from './js/utils/serviceWorkerRegistration';
import reportWebVitals from './js/utils/reportWebVitals';

import './css/variables.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

document.addEventListener('click', () => {
  if (document.getElementById('navbar-toggler').classList.contains('show')) {
    document.getElementById('hamburger').click();
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register('./js/service-worker.js');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
