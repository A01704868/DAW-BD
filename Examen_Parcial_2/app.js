//importa la funcionalidad de express
const express = require('express');
const app = express();

//especificar rutas
const rutasIncidentes = require('./routes/incidentes');
const rutasUsuarios = require('./routes/usuarios');

//importa herramientas para parse datos de http
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// para manejar sessiones
const session = require('express-session');

//para descargar archivos
const multer = require('multer');

//para manejar los paths de proyecto
const path = require('path');

//para proteger de ataques csrf
const csrf = require('csurf');
const csrfProtection = csrf();
//const csrfMiddleware = require('./util/csrf');

//configurar express a que use ejs como motor de vistas
app.set('view engine', 'ejs');
app.set('views', 'views');


//para usar los parsers de http
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
//app.use(multer({ storage: fileStorage }).single('imagen')); 

app.use(session({
    secret: '4ftsag#$:"jatedcg>P#$t5fhg%1@a!@WEDFGHU()', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//correr todos los archivos de la carpeta: public
app.use(express.static(path.join(__dirname, 'public')));
//configuracion de subir archivos static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//Middleware
app.use(
    (request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//espeficar rutas
app.use('/incidentes', rutasIncidentes);
app.use('/usuarios', rutasUsuarios);

//regresar 404 en el caso de que no se encuentre una ruta
app.use(
    (request, response, next) => {
    console.log('Error 404!');
    response.status(404);
    response.send('Que mal'); //Manda la respuesta
});

//que la app escuche en el puerto 3000
app.listen(3000);