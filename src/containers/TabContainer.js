import React, { Component } from 'react';
import Tab from '../components/Tab';
import PropTypes from 'prop-types';

class TabContainer extends Component {
	constructor(props){
		super(props);
		this.props = props
	}

	render() {
		return (
			<Tab styleName={this.props.styleName} header={this.props.header} children={this.props.children} />
		);
	}
}

TabContainer.propTypes = {
	styleName: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired
}


export default TabContainer;