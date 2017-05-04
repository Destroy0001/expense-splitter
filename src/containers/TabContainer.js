import React, { Component } from 'react';
import Tab from '../components/Tab';

class TabContainer extends Component {
	constructor(props){
		super(props);
		this.props = props
	}

	render() {
		return (
			<Tab styleName={this.props.styleName} header={this.props.header} />
		);
	}
}

export default TabContainer;