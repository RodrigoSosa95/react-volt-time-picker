var React = require('react');
var moment = require('moment');
var uuid = require('uuid');

var VoltTimePicker = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    end: React.PropTypes.objectOf(moment).isRequired,
    format: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    start: React.PropTypes.objectOf(moment).isRequired,
    steps: React.PropTypes.number,
    value: React.PropTypes.string.isRequired,
  },
  getDefaultProps: function() {
    return {
      className: '',
      format: 'hh:mm A',
      label: 'Time',
      onChange: time => console.log(time),
      steps: 30,
    };
  },
  renderSteps: function() {
    const { start, steps, end, format } = this.props;
    const difference = end.diff(start, 'minutes');
    const slots = difference / steps;
    const hours = [start.toString()];
    const options = [];
    for (var i = 0; i < slots; i++) {
      hours.push(start.add(steps, 'm').toString());
    }
    hours.map(hour => (
      options.push(
        <option key={uuid()} value={moment(hour)}>
          {moment(hour).format(format)}
        </option>
      )
    ));
    return options;
  },
  render () {
    return (
      <form className={this.props.className}>
        <label
          htmlFor="volt-time-picker"
          style={styles.timePickerLabel}
        >
          {this.props.label}
        </label>
        <div style={styles.selectWrapper} className={`${this.props.className}`}>
          <select
            style={styles.timePickerSelect}
            name="volt-time-picker"
            value={this.props.value}
            onChange={event => this.props.onChange(event.target.value)}
          >
            {this.renderSteps()}
          </select>
        </div>
      </form>
    );
  }
});

const styles = {
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
    border: 'none',
  },
  selectWrapper: {
    width: '150px',
    height: '30px',
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  }
};

export default VoltTimePicker;
