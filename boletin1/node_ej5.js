var http = require("http");
var path = require("path");
var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr, true);

var path = q.path;
var pathname = q.pathname;
var search = q.search;

console.log('Camino completo de la ruta: ' + path);
console.log('Camino y recurso: ' + pathname);
console.log('Parametros recurso: ' + search);

// console.log(q)

var mensaje = function(peticion, respuesta) {

    respuesta.writeHead(200, { "Content-Type": "text/html" });

    respuesta.end('Camino completo de la ruta: ' + path + '<br>Camino y recurso: ' + pathname + '<br>Parametros recurso: ' + search);
}

var server = http.createServer(mensaje);

server.listen(8080);