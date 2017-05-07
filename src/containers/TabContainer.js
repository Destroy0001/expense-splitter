import React, { Component } from 'react';
import Tab from '../components/Tab';

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
	styleName: React.PropTypes.string.isRequired,
	header: React.PropTypes.string.isRequired,
	children: React.PropTypes.object.isRequired
}


export default TabContainer;