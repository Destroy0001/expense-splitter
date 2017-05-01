import React, { Component } from 'react';
class Tab extends Component {
	constructor(props){
		super(props);
		this.props = props
	}
	render() {
		return (
			<div className={`Tab ${this.props.styleName}`}>
				<div className="Tab-header ">
					{ this.props.header }
				</div>
				<div className="Tab-content">
				</div>
			</div>
		);
	}
}

export default Tab;