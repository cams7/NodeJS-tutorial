var http = require('http');//Modulo http

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<h1>Hello world!</h1>");
	response.end();
});

//server.listen(3000);
server.listen(3000, function(){//Porta 3000 - localhost:3000
	console.log('Servidor Hello world rodando!');
});