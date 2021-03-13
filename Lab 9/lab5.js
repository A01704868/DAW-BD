console.log('hola mundo');

let s = 5;

let e = 2.71;

console.log(s+e);

//const file_system = require('fs');

//file_system.writeFileSync('carros.txt', 'Ferrari');

//codigo asincrono que espera 3 segundos antes de ejecutar
setTimeout( ()=> {console.log(e)},100);

const http = require('http');

const server = http.createServer((request, response) =>{
    console.log("hola desde el servidor");
    console.log(request.url);
    console.log('Prius C');

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<body><h1>Hola</h1></body>');
    response.write('</html>');

    response.end;
});

server.listen(3000);