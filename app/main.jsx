import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';


import Home from './components/Home.jsx';
import Like from './components/Like.jsx';
import Message from './components/Message.jsx';
import LoginFB from './components/LoginFB.jsx';


ReactDOM.render((
  <Router history={hashHistory}>
	<Route path="/" component={Home} />
	<Route path="/like" component={Like} />
	<Route path="/message" component={Message} />
  </Router>
), document.querySelector('.container'));


/*ReactDOM.render(
   <LoginFB fb={FB}/>,  
   document.querySelector('#facebook-login'));*/