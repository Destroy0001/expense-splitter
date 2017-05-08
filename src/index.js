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

/*loads state of the application from localStorage*/
const importState = () => {
	try{
		const storedState = localStorage.getItem('expense-splitter');
		if(!storedState){
			return undefined;
		}
		return JSON.parse(storedState);
	}catch(err){
		return undefined;
	}
}

/*saves state of the application to the localStorage*/
const exportState = (state) => {
	try{
		const storedState = JSON.stringify(state);
		localStorage.setItem('expense-splitter',storedState);
	}catch(err){
		localStorage.setItem('expense-splitter',undefined);
	}
}

/*creating store*/
const importedState = importState();
const store = createStore(
		combineReducers({session:SessionReducer,user:UserReducer}),
		importedState,
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

/*writes the application state to localStorage on change*/
store.subscribe(()=>{
	exportState(store.getState());
})