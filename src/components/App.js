import React, { Component } from 'react';
import Tab from './Tab'
class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<span className="App-header-text">Expense Splitter</span>
				</div>
				<div className="App-content">
					<Tab styleName="friends" header="Friends"> </Tab>
					<Tab styleName="groups" header="Groups"> </Tab>
					<Tab styleName="activity" header="Activity"> </Tab>
				</div>
				<div className="App-footer">
					<span className="App-footer-text">&copy; 2017 Ashish Jhanwar</span>
				</div>
			</div>
		);
	}
}

export default App;