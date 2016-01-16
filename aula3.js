var arquivo = require('fs');
var path = './arquivos/novo.txt';
var clubes;

arquivo.readFile('./arquivos/clubes.txt',function(err,data){
	if(err) 
		throw err;
	clubes=data.toString();
});

arquivo.exists(path,function(arquivoCriado){
	if(!arquivoCriado){
		arquivo.writeFile(path, 'Criando arquivo com nodejs', function(err){
			if(err) throw err;
			console.log("Arquivo '"+path+"' criado com sucesso!");
		});
	}else
		console.log("O arquivo '"+path+"' foi criado anteriormente!");
});



var http = require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<h3>Clubes de futebol</h3>");

	response.write("<span style='white-space: pre-line'>"+clubes+"</span>");
	var txt = arquivo.createWriteStream('./arquivos/logs.txt', {flags:'w'});
	txt.write(request.url);
	response.end();
});

server.listen(3000, function(){
	console.log('Aula 3 - Servidor esta rodando!');
});