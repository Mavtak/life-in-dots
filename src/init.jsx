import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import window from './window.js';

function init() {
  let element = (
    <App />
  );
  
  let root = window.document.createElement('div');
  window.document.body.appendChild(root);

  ReactDOM.render(element, root);
}

export default init;
