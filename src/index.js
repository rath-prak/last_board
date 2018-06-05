import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
window.$ = $;

// global.jQuery = require('jquery');
// require ('bootstrap');

ReactDOM.render(
  <App />, document.getElementById('root')
);
