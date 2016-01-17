
var express = require('express');
var app = express();

//Responder com Hello World! na página inicial
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Responder a uma solicitação POST na rota raiz (/) com a página inicial
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

//Responder a uma solicitação PUT para a rota /user:
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

//Responder a uma solicitação DELETE para a rota /user:
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})