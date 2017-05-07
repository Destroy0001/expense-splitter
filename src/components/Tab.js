import React, { Component } from 'react';

import '../css/Tab.css';
class Tab extends Component {
	constructor(props){
		super(props);
		this.props = props
	}
	render() {
		return (
			<div className={`Tab ${this.props.styleName}`}>
				<input className="Tab-selector" id={`Tab-${this.props.styleName}`} type="radio" name="tabs" aria-hidden="true" />
				<div className="Tab-header ">
					<label  htmlFor={`Tab-${this.props.styleName}`}>
					{ this.props.header }
					</label>
				</div>
				<div className="Tab-content">
					{ this.props.children}
				</div>
			</div>
		);
	}
}

export default Tab;