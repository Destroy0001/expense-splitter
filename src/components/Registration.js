import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import '../css/Registration.css';

class Registration extends Component {
	constructor(props){
		super(props);
		this.state  = {
			name:'',
			email:'',
			password:''
		}
	}
	/* 
		handlers to set state of input in the component itself, 
		global state is not needed for this
	*/
	handleEmail = (e) => {
		this.setState({email:e.target.value});
	}

	handlePassword = (e) => {
		this.setState({password:e.target.value});
	}

	handleName = (e) => {
		this.setState({name:e.target.value});
	}

	doRegistration = () => {
		this.props.doRegistration(
			this.props,
			this.state.name,
			this.state.email,
			this.state.password
			);
	}
	render() {
		return (
			<div className="Registration-content">
				<div className="Registration-error"></div>
				<div className="Registration-form">
					<input
						name="name" 
						className="Registration-name form-control" 
						placeholder="Name"
						onChange={this.handleName}
						type="text" 
					/>
					<input
						name="email" 
						className="Registration-email form-control" 
						placeholder="Email" 
						type="text"
						onChange={this.handleEmail}
					/>
					<input
						name="password" 
						className="Registration-password form-control" 
						placeholder="Password" 
						type="password"
						onChange={this.handlePassword}
					/>
					<Button 
						className="Registration-button" 
						bsStyle="danger" 
						onClick={this.doRegistration}
					>Sign-up</Button>
				</div>
				<Link className="Login-link" to='/login'> Existing User? Login</Link>
				<hr/>
			</div>
			);
	}
}

export default Registration;