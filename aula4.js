var http = require('http');
var arquivo = require('fs');

var server = http.createServer(function(request,response){	
	response.writeHead(200,{"Content-Type":"text/html"});
	var url = request.url;
	
	switch(url){
		case '/':
		case '/contatos':
		case '/contatos2':
			var file = url === '/'?'index.html':url.substring(1)+".html";
			arquivo.readFile(__dirname+"/aula4/"+file,function(err,data){	
				if(err)
					response.write("<h3>Arquivo'"+file+"' nao encontrado!</h3>");
				else								
					response.write(data);	
				response.end();				
			});
			break;		
		default:
			response.write("<h3>Pagina nao encontrada!</h3>");
			response.end();	
			break;
	}
		
});

server.listen(3000, function(){
	console.log('Aula 4 - Servidor rodando!');
});