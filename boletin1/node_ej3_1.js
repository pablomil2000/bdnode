var http = require('http');
var pageInfo = require('page-info');

//codigo 

console.log("Camino completo del recurso y parametros: " + pageInfo.title);

var mensaje = function(peticion, respuesta) {
    respuesta.writeHead(200);
    respuesta.end("Hola mundo");
}

var server = http.createServer(mensaje);

server.listen(8080);