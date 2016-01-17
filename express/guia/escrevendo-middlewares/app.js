var express = require('express');
var app = express();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

var myLogger = function (req, res, next) {
  var logText= 'LOGGED';
  logText+=', Requested at: ' + req.requestTime + '';
  console.log(logText);
  next();
};

app.use(myLogger);

app.get('/', function (req, res) {
  var responseText = 'Hello World!';
  responseText += ' Requested at: ' + req.requestTime + '';
  res.send(responseText);
});

app.listen(3000, function () {
  console.log('Example "escrevendo middlewares" listening on port 3000!');
});