import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import DATA from './../data.json';
import '../css/style.scss';



ReactDOM.render(<App data={DATA}/>, document.getElementById('root'));