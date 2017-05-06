import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import '../css/Registration.css';

class Registration extends Component {
	render() {
		return (
			<div className="Registration-content">
				<div className="Registration-form">
					<input name="name" className="Registration-name form-control" placeholder="Name" type="text" />
					<input name="email" className="Registration-email form-control" placeholder="Email" type="text" />
					<input name="password" className="Registration-password form-control" placeholder="Password" type="password" />
					<Button className="Registration-button" bsStyle="danger" >Sign-up</Button>
				</div>
				<Link className="Login-link" to='/login'> Existing User? Login</Link>
				<hr/>
			</div>
			);
	}
}

export default Registration;