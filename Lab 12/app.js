const express = require('express');//es como un import
const app = express();

const rutasMascotas = require('./routes/mascotas');//para conectar la carpeta y el archivo de "routes-mascotas"

const rutasLab = require('./routes/descripcion');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});

//Middleware
app.use(
    (request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/mascotas', rutasMascotas);//para conectar la carpeta y el archivo de "routes-mascotas"

app.use('/descripcion', rutasLab);

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use('/intro', (request, response, next) => {
    response.sendFile('Lab1Intro.html', {root: __dirname}); 
});

app.use('/ventas', (request, response, next) => {
    response.sendFile('ventas.html',{root: __dirname}); 
});

app.use('/principal', (request, response, next) => {
    response.sendFile('Pagina_Principal.html',{root: __dirname}); 
});

app.use('/poema', (request, response, next) => {
    response.send('<p>roses are red, violets are blue, even my moms, funnier than you</p>'); 
});

app.get('/', (request, response, next) => {
    response.send('Bienvenido'); 
});

app.use(
    (request, response, next) => {
    console.log('Error 404!');
    response.status(404);
    response.send('Que mal'); //Manda la respuesta
});

app.listen(3000);