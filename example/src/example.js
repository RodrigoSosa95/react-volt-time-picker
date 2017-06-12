var React = require('react');
var ReactDOM = require('react-dom');
var VoltTimePicker = require('react-volt-time-picker');

var App = React.createClass({
	render () {
		return (
			<div>
				<VoltTimePicker />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
