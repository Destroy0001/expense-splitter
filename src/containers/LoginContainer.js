import React, { Component } from 'react';
import Login from '../components/Login';
import { loginAction } from '../actions/LoginActions';
import { connect } from 'react-redux';


const mapStateToProps = state => {
	return {
		loggedIn: state.session.loggedIn
	}
};

const mapDispatchToProps = dispatch => {
	return {
		doLogin: (username,password) => {
			dispatch(loginAction(username,password))
		}
	}
};

class LoginContainer extends Component {
	render() {
		return <Login doLogin={this.props.doLogin} loggedIn={this.props.loggedIn}/>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginContainer);