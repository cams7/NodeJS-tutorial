var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.get('/user/:id', function (req, res, next) {
  res.send('USER');
});

app.get('/user2/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info');
});

// handler for the /user/:id path, which prints the user ID
app.get('/user3/:id', function (req, res, next) {
  res.end(req.params.id);
});

app.get('/user4/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // otherwise pass the control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
  //res.send('Render a regular page');
});

// handler for the /user/:id path, which renders a special page
app.get('/user4/:id', function (req, res, next) {
  res.render('special');
  //res.send('Render a special page');
});

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

app.use(express.static('public', options));
//app.use(express.static('uploads'));
//app.use(express.static('files'));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function () {
  console.log('Example "usando middlewares" listening on port 3000!');
});