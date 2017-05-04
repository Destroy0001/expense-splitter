import React, { Component } from 'react';
import '../css/Registration.css';

class Registration extends Component {
	render() {
		return (
			<div className="Registration-form">
				<input name="name" className="Registration-name" placeholder="Name" type="text" />
				<input name="email" className="Registration-email" placeholder="Email" type="text" />
				<input name="password" className="Registration-password" placeholder="Password" type="password" />
			</div>
			);
	}
}

export default Registration;