var http = require("http");

num1 = Math.floor(Math.random() * 10);
num2 = Math.floor(Math.random() * 10);
sum = num1 + num2;
res = num1 - num2;
div = num1 / num2;
pi = Math.PI;

console.log("El resultado de " + num1 + "+" + num2 + " es " + sum);
console.log("El resultado de " + num1 + "-" + num2 + " es " + res);
console.log("El resultado de " + num1 + "/" + num2 + " es " + div);
console.log("El resultado de PI es " + pi);

var mensajeParaVisitante = function(peticion, resultado) {
    resultado.writeHead(200);

    resultado.end("Mira la consola");

}

var servidor = http.createServer(mensajeParaVisitante);

servidor.listen(8080)