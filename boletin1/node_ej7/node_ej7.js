var http = require('http');
var url = require('url');
var fs = require('fs');

var mensaje = function(req, res) {

    var queryString = url.parse(req.url, true);
    var ruta = queryString.pathname;

    if (ruta == '/') {
        content = fs.readFileSync('index.html');
    } else {
        content = fs.readFileSync(ruta);
    }


    res.writeHead(200);
    res.write(content);
    res.end('');
};

var server = http.createServer(mensaje);

server.listen(8080);