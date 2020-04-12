import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Culture from "./Culture";
import About from "./About";
import FactCheck from "./FactCheck";
import Blogs from "./Blogs";
import DonationMatch from "./DonationMatch";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/factcheck" component={FactCheck} />
      <Route path="/culture" component={Culture} />
      <Route path="/donationmatch" component={DonationMatch} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>,
  document.getElementById('root'));
serviceWorker.unregister();
