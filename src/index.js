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
import { Provider } from 'react-redux';
import SessionReducer from './reducers/SessionReducer';
import UserReducer from './reducers/UserReducer';

import AppContainer from './containers/AppContainer';
import './index.css';

const store = createStore(
	combineReducers({session:SessionReducer,user:UserReducer}),
	applyMiddleware(thunk)
	);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} >
			<Route path="/" component={AppContainer} />
		</Router>
	</Provider>,
	document.getElementById('app')
)
