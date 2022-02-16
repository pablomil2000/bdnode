var http = require('http');
var os = require('os');
//codigo

console.log("Sistema operativo: " + os.platform());
console.log("Version sistema operativo: " + os.release());
console.log("Memoria total: " + os.totalmem() + " bytes");
console.log("Memoria libre: " + os.freemem() + " bytes");

var mensaje = function(peticion, respuesta) {
    respuesta.writeHead(200);
    respuesta.end('Lee la consola');
}

var servidor = http.createServer(mensaje);

servidor.listen(8080)