import 'babel-polyfill';
require('file-loader?name=index.html!./index.html');
require('./_src/GlobalStyle.css');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const dom = document.getElementById('root');
ReactDOM.render(
  <App />,
  dom
);
