import React, { Component } from 'react';
import TabContainer from '../containers/TabContainer';
import FriendsContainer from '../containers/FriendsContainer';
import GroupsContainer from '../containers/GroupsContainer';
import ActivityContainer from '../containers/ActivityContainer';
import { Button } from 'react-bootstrap';
import '../css/Dashboard.css';

class Dashboard extends Component {
	render() {
		return (
			<div className="Dashboard-content" >
				<TabContainer styleName="friends" header="Friends">
					<FriendsContainer />
				</TabContainer>
				<TabContainer styleName="groups" header="Groups">
					<GroupsContainer />
				</TabContainer>
				<TabContainer styleName="activity" header="Activity">
					<ActivityContainer />
				</TabContainer>
				<Button className="Add-expenses btn-warning"> + </Button>
			</div>
		);
	}
}

export default Dashboard;