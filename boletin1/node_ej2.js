var http = require('http');

//CODIGO

console.log("asd");


var mensajeParaVisitante = function(peticion, resultado) {
    resultado.writeHead(200);
    resultado.end("Mira la consola");
}

var servidor = http.createServer(mensajeParaVisitante);

servidor.listen(8080)