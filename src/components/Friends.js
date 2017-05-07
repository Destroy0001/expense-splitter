import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import '../css/Friends.css';
class Friends extends Component {
	render() {
		return (
			<div className="Friends-content">
				<div className='Friends-list'>
				</div>
				<Button className="Add-friends-button btn-danger"> ADD FRIEND TO SPLIT EXPENSES </Button>
			</div>
		);
	}
}

export default Friends;