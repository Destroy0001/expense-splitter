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
		doLogin: (props,username,password) => {
			dispatch(loginAction(props,username,password))
		}
	}
};

class LoginContainer extends Component {
	componentWillMount(){
		if(this.props.loggedIn){
			const {history} = this.props;
			history.push('/dashboard')
		}
	}
	
	render() {
		return <Login {...this.props}/>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginContainer);