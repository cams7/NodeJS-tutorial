var http = require('http');//Modulo http

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	switch(request.url){
		case '/' :
			response.write("<h1>Pagina principal!</h1>");
			break;
		case '/contato' :
			response.write("<h1>Pagina de contado!</h1>");
			break;
		case '/cliente' :
			response.write("<h1>Pagina de cliente!</h1>");
			break;
		default:
			response.write("<h1>Pagina nao encontrada.</h1>");
			break;
	}
	response.end();
});

//server.listen(3000);
server.listen(3000, function(){//Porta 3000 - localhost:3000
	console.log('Aula 2 - Servidor esta rodando!');
});