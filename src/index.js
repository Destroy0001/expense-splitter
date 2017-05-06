/*
* This is the entry point to the applications,
* we'd have three routes, 
* one for login,
* another for registration,
* and the last for the app itself
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import AppContainer from './containers/AppContainer';
import {AppReducer} from './reducers/Reducer.js';
import './index.css';

const store = createStore(
					AppReducer,
					applyMiddleware(
						thunk,
						createLogger
					)
				);

const checkLogin = (nextState, replaceState) => {
	console.log('Test!');
	let { loggedIn } = store.getState();
	if(loggedIn)
		browserHistory.push('/dashboard');
}


ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" onEnter={checkLogin} component={AppContainer} />
	</Router>,
	document.getElementById('app')
);