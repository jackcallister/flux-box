require('node-jsx').install();

var React       = require('react');
var initializer = require('./server/initializer');
var path        = require('path');
var express     = require('express');
var app         = express();

app.get('/', function(req, res) {
  res.send(initializer);
});

var publicPath = path.join(__dirname, 'dist');

console.log(publicPath);

app.use(express.static(publicPath));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('app ' + app.get('env') + ' server listening on port ' + this.address().port);
});
