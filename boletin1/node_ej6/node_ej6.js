const http = require('http');
const fs = require('fs');

ruta = 'index.html';

var mensaje = function(peticion, respuesta) {
    respuesta.writeHead(200, { 'Content-Type': 'text/html' });
    if (fs.existsSync(ruta)) {
        contenido = fs.readFileSync(ruta);
        respuesta.write(contenido);
    } else {
        respuesta.write('No existe');
    }
    respuesta.end('');
}

var server = http.createServer(mensaje);
server.listen(8080);