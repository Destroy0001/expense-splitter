/*
* This is the entry point to the applications,
* we'd have two routes here, one for login, and other for the application itself. 
*/

import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';


import LoginContainer from './containers/LoginContainer';
import AppContainer from './containers/AppContainer';
import './index.css';

ReactDOM.render(
	<AppContainer />,
	document.getElementById('app')
);