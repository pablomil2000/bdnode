var http = require("http");
var path = require("path");
var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr, true);

console.log('Camino completo de la ruta: ' + q.path);
console.log('Camino y recurso: ' + q.pathname);
console.log('Parametros recurso: ' + q.search);

// console.log(q)

var mensaje = function(peticion, respuesta) {

    respuesta.writeHead(200);
    respuesta.end('Usa la consola');
}

var server = http.createServer(mensaje);

server.listen(8080);