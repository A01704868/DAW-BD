const http = require('http');

const server = http.createServer( (request, response) => {

    if(request.url === '/'){

    response.setHeader('Content-Ty','text/html');
    response.write('<html>');
    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head>');
    response.write('<body><h1>Opciones</h1>');
    response.write('<ul><li><a href="/Login">Login</a></li><li><a href="/Creacion">Crear cuenta</a></li></ul>');
    response.write('</body></html>');
    response.end();
    } else if(request.url === '/Creacion' && request.method === "GET"){
        response.setHeader('Content-Ty','text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head>');
        response.write('<body><h1>Elige un nombre de usuario y un password<h2>');
        response.write('<form action="/Creacion" method="POST">');
        response.write('Username: <input type="text" name="nombre">');
        response.write('Password: <input type="text" name="password">');
        response.write('<input type="submit" name="enviar" value="entrar"></br>');
        response.write('</form>');
        response.write('</body></html>');
        response.end();
    } else if(request.url === '/Creacion' && request.method === "POST"){
        var fs = require("fs");
        const datos = [];
        request.on('data', (dato)=>{
            datos.push(dato);
        });

        request.on('end', () =>{
            const datos_completos = Buffer.concat(datos).toString();
            const usuario = datos_completos.split('=')[1].split('&')[0];
            const contra = datos_completos.split('=')[2].split('&')[0];

            fs.writeFile("admin.txt", usuario+','+contra, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            }); 
        });

        response.write('<html>><body>');
        response.write('<h5><a href="/Login">Ahora Puedes Login</a></h5>');
        response.write('</body></html>');
        response.end();

    } else if(request.url === '/Login' && request.method === "GET"){

        response.setHeader('Content-Ty','text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head>');
        response.write('<body><h1>Login<h2>');
        response.write('<form action="/Login" method="POST">');
        response.write('Username: <input type="text" name="nombre">');
        response.write('Password: <input type="text" name="password">');
        response.write('<input type="submit" name="enviar" value="entrar"></br>');
        response.write('</form>');
        response.write('</body></html>');
        response.end();
        
    }else if(request.url === '/Login' && request.method === "POST"){
        const datos = [];
        var fs = require('fs');
        var adminUsuario;
        var adminContra;
        var usuario;
        var contra;

        const data = fs.readFileSync('./admin.txt',{encoding:'utf8'});

        adminUsuario = data.split(',')[0];
        adminContra = data.split(',')[1];


        request.on('data', (dato)=>{
            datos.push(dato);
        });
        
        request.on('end', () =>{
            const datos_completos = Buffer.concat(datos).toString();
            usuario = datos_completos.split('=')[1].split('&')[0];
            contra = datos_completos.split('=')[2].split('&')[0];
        });

        setTimeout(function(){
        
            if(usuario === adminUsuario && contra === adminContra){
            response.write('<html>><body>');
            response.write('<h5>Estas autenticado</h5>');
            response.write('</body></html>');
        }else{
            response.write('<html>><body>');
            response.write('<h5>No estas autenticado</h5>');
            response.write('</body></html>');
        } }, 5000);
        
        response.end();
    } else{
        response.statusCode = 404;
        response.setHeader('Content-Ty','text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head>');
        response.write('<body><h1>Error 404<h2></body>');
        response.write('</html>');
        response.end();
    }
    
});

server.listen(3000);