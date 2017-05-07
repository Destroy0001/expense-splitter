import React, { Component } from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import '../css/Groups.css';
class Groups extends Component {
	render() {
		return (
			<div className="Groups-content">
				<div className="settlements"></div>
				<div className="Groups-list">
				<DropdownButton title="CHOOSE A GROUP" className="Groups-list-button">
					<MenuItem eventKey="1">Group 1</MenuItem>
					<MenuItem eventKey="2">Group 2</MenuItem>
				</DropdownButton>
				<div className="Group-expenses">
				</div>
				</div>
				<Button className="Add-groups-button btn-danger"> CREATE A NEW GROUP </Button>
			</div>
		);
	}
}

export default Groups;