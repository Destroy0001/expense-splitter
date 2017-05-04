import React, { Component } from 'react';
import TabContainer from '../containers/TabContainer';
import '../css/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<span className="App-header-text">Expense Splitter</span>
				</div>
				<div className="App-content">
						<TabContainer styleName="friends" header="Friends"> </TabContainer>
						<TabContainer styleName="groups" header="Groups"> </TabContainer>
						<TabContainer styleName="activity" header="Activity"> </TabContainer>
				</div>
				<div className="App-footer">
					<span className="App-footer-text">&copy; 2017 Ashish Jhanwar</span>
				</div>
			</div>
		);
	}
}

export default App;