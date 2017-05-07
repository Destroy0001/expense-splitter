import React, { Component } from 'react';
import { Route, Redirect, browserHistory } from 'react-router-dom';

import App from '../components/App';
import DashboardContainer from './DashboardContainer';
import LoginContainer from './LoginContainer';
import RegistrationContainer from './RegistrationContainer';

class AppContainer extends Component {
	render() {
		return (
			<App >
				<Route path="/" component={LoginContainer} />
				<Route path="/login" component={LoginContainer} />
				<Route path="/registration" component={RegistrationContainer} />
				<Route path="/dashboard" component={DashboardContainer} />
			</App>
		);
	}
}



export default AppContainer;