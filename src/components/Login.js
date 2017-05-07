import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import '../css/Login.css';

class Login extends Component {
	constructor(props){
		super(props);
		this.state  = {
			email:'',
			password:''
		}
	}

	handleEmail = (e) => {
		this.setState({email:e.target.value})
	}

	handlePassword = (e) => {
		this.setState({password:e.target.value})
	}

	doLogin = (e) => {
		this.props.doLogin(this.state.email,this.state.password);
	}

	render() {
		return (
			<div className="Login-content">
				<div className="Login-error"> </div>
				<div className="Login-form">

					<input
						className="Login-email form-control"
						placeholder="Email"
						type="text"
						onChange={this.handleEmail}
					/>

					<input
						className="Login-password form-control"
						placeholder="Password"
						type="password"
						onChange={this.handlePassword}
					 />

					<Button
						className="Login-button" 
						bsStyle="danger" 
						type="submit" 
						onClick={this.doLogin}
					>
						Login
					</Button>

				</div>
				<hr/>
				<Link className="Registration-link" to='/registration'>New User? Register</Link>
			</div>
		);
	}

}

export default Login;