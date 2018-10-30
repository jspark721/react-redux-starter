import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css'; //webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/boostrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)
