import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

console.log('Its working');

class App extends Component {
	constructor() {
		super()
		this.state = {
			
		}
	}

	render() {
		return <h1>slt</h1>
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));

console.log('Its updated');