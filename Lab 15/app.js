const express = require('express');
const app = express();

const rutasMascotas = require('./routes/mascotas');

const rutasLab = require('./routes/ordenes');

const bodyParser = require('body-parser');

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});

//Middleware
app.use(
    (request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/mascotas', rutasMascotas);

app.use('/ordenes', rutasLab);

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use('/ventas', (request, response, next) => {
    response.render('ventas', {titulo:"ventas"}); 
});

app.use('/principal', (request, response, next) => {
    response.render('Pagina_Principal', {titulo:"Pagina_Principal"}); 
});

app.use('/poema', (request, response, next) => {
    response.send('<p>roses are red, violets are blue, even my moms, funnier than you</p>'); 
});

app.get('/', (request, response, next) => {
    response.render('Intro', {titulo:"Intro"});
});

app.use(
    (request, response, next) => {
    console.log('Error 404!');
    response.status(404);
    response.send('Error 404 '); //Manda la respuesta
});

app.listen(3000);