import React, { Component } from 'react';
import TabContainer from '../containers/TabContainer';
import '../css/Dashboard.css';

class Dashboard extends Component {
	render() {
		return (
			<div >
					<TabContainer styleName="friends" header="Friends"> </TabContainer>
					<TabContainer styleName="groups" header="Groups"> </TabContainer>
					<TabContainer styleName="activity" header="Activity"> </TabContainer>
			</div>
		);
	}
}

export default Dashboard;