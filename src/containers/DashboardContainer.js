import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		loggedIn: state.session.loggedIn
	}
};


class DashboardContainer extends Component {
	componentWillMount(){
		if(!this.props.loggedIn){
			const {history} = this.props;
			history.push('/login')
		}
	}

	render() {
		return <Dashboard />;
	}
}

export default connect(
	mapStateToProps,
	null
)(DashboardContainer);