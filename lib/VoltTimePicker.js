'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var React = require('react');
var moment = require('moment');
var uuid = require('uuid');

var VoltTimePicker = React.createClass({
  displayName: 'VoltTimePicker',

  propTypes: {
    className: React.PropTypes.string,
    end: React.PropTypes.objectOf(moment).isRequired,
    format: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    start: React.PropTypes.objectOf(moment).isRequired,
    steps: React.PropTypes.number,
    value: React.PropTypes.string.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      format: 'hh:mm A',
      label: 'Time',
      onChange: function onChange(time) {
        return console.log(time);
      },
      steps: 30
    };
  },
  renderSteps: function renderSteps() {
    var _props = this.props;
    var start = _props.start;
    var steps = _props.steps;
    var end = _props.end;
    var format = _props.format;

    var difference = end.diff(start, 'minutes');
    var slots = difference / steps;
    var hours = [start.toString()];
    var options = [];
    for (var i = 0; i < slots; i++) {
      hours.push(start.add(steps, 'm').toString());
    }
    hours.map(function (hour) {
      return options.push(React.createElement(
        'option',
        { key: uuid(), value: moment(hour) },
        moment(hour).format(format)
      ));
    });
    return options;
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'form',
      { className: this.props.className },
      React.createElement(
        'label',
        {
          htmlFor: 'volt-time-picker',
          style: styles.timePickerLabel
        },
        this.props.label
      ),
      React.createElement(
        'div',
        { style: styles.selectWrapper, className: '' + this.props.className },
        React.createElement(
          'select',
          {
            style: styles.timePickerSelect,
            name: 'volt-time-picker',
            value: this.props.value,
            onChange: function (event) {
              return _this.props.onChange(event.target.value);
            }
          },
          this.renderSteps()
        )
      )
    );
  }
});

var styles = {
  timePickerLabel: {
    display: 'block',
    marginBottom: '0.3rem'
  },
  timePickerSelect: {
    display: 'block',
    fontSize: '1rem',
    width: '100%',
    appearance: 'none',
    autofill: '#fff !important',
    backgroundColor: 'transparent',
    borderRadius: 0,
    border: 'none'
  },
  selectWrapper: {
    width: '150px',
    height: '30px',
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: 'whitesmoke',
    justifyContent: 'center'
  }
};

exports['default'] = VoltTimePicker;
module.exports = exports['default'];