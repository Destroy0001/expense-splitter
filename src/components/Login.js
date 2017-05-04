import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {
	render() {
		return (
			<div className="Login-form">
				<input className="Login-email" placeholder="Email" type="text" />
				<input className="Login-password" placeholder="Password" type="password" />
			</div>
		);
	}
}

export default Login;