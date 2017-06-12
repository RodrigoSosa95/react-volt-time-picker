# Volt time picker

_SIMPLE REACT SELECT TIME PICKER WITH STARTING TIME, ENDING TIME, STEPS, ON CHANGE AND FORMAT_


## Demo & Examples

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-volt-time-picker is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-volt-time-picker.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-volt-time-picker --save
```

## Usage
```
var VoltTimePicker = require('react-volt-time-picker');

<VoltTimePicker
  value={this.state.value}
  start={moment().local().startOf('d').add(9, 'h')}
  end={moment().local().startOf('d').add(21, 'h')}
  onChange={value => this.handleHourChange(value)}
/>
```

### Properties

* _className: string_
* _start: moment object_
* _end: moment object_
* _format: string (All supported moment.js formats)_
* _label: string_
* _onChange: function(hour: string)_
* _steps: number_
* _value: moment object to string_

### Notes

_Required dependencies_

*_moment_
*_uuid_

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

_MIT_

Copyright (c) 2017 Rodrigo Sosa P.
