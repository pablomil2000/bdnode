var http = require("http");

// MySQL
var mysql = require("mysql");

var conexionMySQL = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "angular"
});

var consultaSQL = "SELECT * FROM coches";

conexionMySQL.query(
    consultaSQL,
    function leerRegistros(error, registros) {
        if (error) {
            console.log(error);
            conexionMySQL.end();
            return;
        }

        if (registros.length > 0) {
            var primerRegristro = registros[0];

            console.log("Marca: " + primerRegristro['marca']);
            console.log("Modelo: " + primerRegristro['modelo']);
            console.log("Pais: " + primerRegristro['pais']);
        } else {
            console.log("No hay datos");
        }

        conexionMySQL.end();
    });

var mensajeParaVisitante = function(peticion, resultado) {
    resultado.writeHead(200);
    resultado.end("Servidor en funcionamiento - Resultado en modo consola");
}

var servidor = http.createServer(mensajeParaVisitante);

servidor.listen(8080)