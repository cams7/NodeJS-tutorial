var express = require('express');
var app = express();

//- Métodos de roteamento

app.all('/all', function (req, res, next) {
  console.log('Accessing the all section ...');
  next(); // pass control to the next handler
});

// GET method route
app.get('/all', function (req, res) {
  res.send('GET request to the all');
});

// POST method route
app.post('/all', function (req, res) {
  res.send('POST request to the all');
});

//- Caminhos de rota

//Este caminho de rota corresponde a solicitações à rota raiz, /.
app.get('/', function (req, res) {
  res.send('root');
});

//Este caminho de rota irá corresponder a solicitações ao /about.
app.get('/about', function (req, res) {
  res.send('about');
});

//Este caminho de rota irá corresponder a solicitações ao /random.text.
app.get('/random.text', function (req, res) {
  res.send('random.text');
});

//Este caminho de rota irá corresponder ao acd e abcd.
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

//Este caminho de rota irá corresponder ao 
//efcd, abbcd, efffcd, e assim por diante.
app.get('/ef+cd', function(req, res) {
  res.send('ef+cd');
});

//Este caminho de rota irá corresponder ao 
//ghcd, ghxcd, ghRABDOMcd, gh123cd, e assim por diante.
app.get('/gh*cd', function(req, res) {
  res.send('gh*cd');
});

//Este caminho de rota irá corresponder ao /ije e /ijcde.
app.get('/ij(cd)?e', function(req, res) {
 res.send('ij(cd)?e');
});

//Este caminho de rota irá corresponder a qualquer coisa com um “z” no nome.
app.get(/z/, function(req, res) {
  res.send('/z/');
});

//Este caminho de rota irá corresponder a butterfly e dragonfly, 
//mas não a butterflyman, dragonfly man, e assim por diante.
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});

//- Manipuladores de rota

//Uma única função de retorno de chamada pode manipular uma rota.
app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});

//Mais de uma função de retorno de chamada pode manipular uma rota 
//(certifique-se de especificar o objeto next object).
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});

//Uma matriz de funções de retorno de chamada podem manipular uma rota. 
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

//Uma combinação de funções independentes e matrizes de funções podem manipular uma rota. Por exemplo:
app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

//- Métodos de resposta

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

 var birds = require('./birds');
 app.use('/birds', birds);

app.listen(3000, function () {
  console.log('Example "roteamento" listening on port 3000!');
});