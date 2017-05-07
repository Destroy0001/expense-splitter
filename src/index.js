/*
* This is the entry point to the applications,
* we'd have three routes, 
* one for login,
* another for registration,
* and the last for the app itself
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Provider } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import SessionReducer from './reducers/SessionReducer';
import UserReducer from './reducers/SessionReducer';

import AppContainer from './containers/AppContainer';
import './index.css';

const store = createStore(combineReducers(SessionReducer, UserReducer));
ReactDOM.render(
		<Router history={browserHistory} >
			<Route path="/" component={AppContainer} />
		</Router>,
	document.getElementById('app')
);

store.subscribe(render);