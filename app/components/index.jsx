import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App/index.jsx';
import Signup from './Signup/index.jsx';
import Login from './Login/index.jsx';
import Feed from './Feed/index.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/signin" component={Login}></Route>
      <Route path="/photos" component={Feed}></Route>
    </Router>
), document.getElementById('app'));