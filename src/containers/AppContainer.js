import React, { Component } from 'react';
import { Route, Redirect, browserHistory } from 'react-router-dom';

import App from '../components/App';
import DashboardContainer from './DashboardContainer';

class AppContainer extends Component {
	render() {
		return (
			<App >
				<DashboardContainer />
			</App>
		);
	}
}



export default AppContainer;