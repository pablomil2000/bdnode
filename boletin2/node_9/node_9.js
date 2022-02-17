var http = require('http');
var mysql = require('mysql');

var conexion = mysql.connect({
    host: 'localhost',
    usuario: 'root',
    password: '',
    database: 'node_9',
});

var consulta = 'SELECT * FROM category'

conexion.query(consulta, function leerRegistros(error, registros) {
    if (error) {

        console.log(error);

        conexionMySQL.end();

        return;
    }
    if (registros.length > 0) {
        var primerRegistro = registros[0];
        console.log("Marca: " + primerRegistro["marca"]);
    } else {
        console.log("No hay datos");
    }
    conexionMySQL.end();
});