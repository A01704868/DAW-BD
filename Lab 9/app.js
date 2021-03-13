const file_system = require('fs');

//file_system.writeFileSync('carros.txt','Ferrari');

const arreglo = [3522,1998,2020,4500,5555,6666,34,20,2,134,10];

for(let item of arreglo){
    setTimeout( () => {
        console.log(item);
    }, item);
}

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log('Honda');
    console.log("Hola desde el servidor web");
    console.log(request);
    console.log('Prius C');

    response.setHeader('Content-Ty','text/html')
    response.write('<html><body>');
    response.write('<p>Hola desde el servidor web<p>');
    response.write('</body></html>')
    console.log(response);
    response.end();
});

server.listen(3000);