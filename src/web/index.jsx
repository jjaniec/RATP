import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Search from 'components/Search'

import AppBar from 'components/AppBar'
import Stepper from 'components/Stepper'

console.log('Its working');

class App extends Component {
	constructor() {
		super()
		this.state = {
			
		}
	}

	render() {
		return (
			<div id="app">
				<span id="step1" class="value_hidden"></span>
				<span id="step2" class="value_hidden"></span>
				<span id="step3" class="value_hidden"></span>
				<AppBar />
				<Stepper />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));

console.log('Its updated');