import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Culture from "./Culture";
import About from "./About";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/COVID-19" component={App} />
      <Route path="/Culture" component={Culture} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
