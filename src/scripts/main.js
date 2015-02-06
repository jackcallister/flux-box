require("../styles/main.scss");

var App = require('./components/app');
var React = require('react');

window.React = React; // export for http://fb.me/react-devtools

React.render(<App temp={'Client side'}/>, document.getElementById('app'));
