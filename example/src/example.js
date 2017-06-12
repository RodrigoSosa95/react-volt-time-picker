var React = require('react');
var ReactDOM = require('react-dom');
var moment = require('moment');
var VoltTimePicker = require('react-volt-time-picker');

var App = React.createClass({
  getInitialState: function() {
    return {
      value: moment().local().startOf('d').add(9, 'h').toString()
    };
  },
  handleHourChange: function(hour) {
    this.setState({value: hour});
  },
  render () {
    return (
      <div>
        <VoltTimePicker
          value={this.state.value}
          start={moment().local().startOf('d').add(9, 'h')}
          end={moment().local().startOf('d').add(21, 'h')}
          onChange={value => this.handleHourChange(value)}
        />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
