var React = require('react');

var App = React.createClass({


  render: function() {
    return (
      <div className='app'>
        <h1>{this.props.temp}</h1>
      </div>
    );
  }
});

module.exports = App;
