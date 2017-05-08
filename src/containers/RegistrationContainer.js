import React, { Component } from 'react';
import Registration from '../components/Registration';
import { registrationAction } from '../actions/RegistrationActions';
import { connect } from 'react-redux';


const mapStateToProps = state => {
	return {
		loggedIn: state.session.loggedIn
	}
};

const mapDispatchToProps = dispatch => {
	return {
		doRegistration: (props,email,username,password) => {
			dispatch(registrationAction(props,email,username,password))
		}
	}
};

class RegistrationContainer extends Component {
	componentWillMount(){
		if(this.props.loggedIn){
			const {history} = this.props;
			history.push('/dashboard')
		}
	}

	render() {
		return <Registration {...this.props} />;
	}
}



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegistrationContainer);