import React, { Component } from 'react';
import Sidebar from './Sidebar';
import '../css/App.css'
class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<span className="App-header-text">Expense Splitter</span>
				</div>
				<Sidebar/>
				<div className="App-footer">
					<span className="App-footer-text">&copy; 2017 Ashish Jhanwar</span>
				</div>
			</div>
		);
	}
}

export default App;