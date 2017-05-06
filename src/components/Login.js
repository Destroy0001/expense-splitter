import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import { login } from '../actions/LoginActions';
import { connect } from 'react-redux';
import '../css/Login.css';

class Login extends Component {

	render() {
		return (
			<div className="Login-content">
				<div className="Login-error"> </div>
				<div className="Login-form">

					<input
						className="Login-email form-control"
						placeholder="Email"
						type="text"
					/>

					<input
						className="Login-password form-control"
						placeholder="Password" 
						type="password"
					 />

					<Button
						className="Login-button" 
						bsStyle="danger" 
						type="submit" 
						onClick={this._login}
					>
						Login
					</Button>

				</div>
				<hr/>
				<Link className="Registration-link" to='/registration'>New User? Register</Link>
			</div>
		);
	}

	/* wrapper to perform login */
	_login = () =>{
		let email = document.querySelector('.Login-email').textContent;
		let password = document.querySelector('.Login-password').textContent;
		login(email,password);
	}

}

export default Login;