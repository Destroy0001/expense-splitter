import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {
	render() {
		return (
			<div className="Login">
				<div className="Login-header">
					<span className="Login-header-text">Expense Splitter</span>
				</div>
				<div className="Login-form">
						<input className="Login-email" type="text" />
						<input className="Login-password" type="password" />
				</div>
			</div>
		);
	}
}

export default Login;