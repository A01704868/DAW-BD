const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/prompt', (request, response, next) => {
    response.send('<h1>Describe el archivo package.json.</h1><br><form action ="prompt" method="POST"><input type="text" name="response"><input type="submit" name="enviar" value="responder"></form>');
});

router.post('/prompt', (request, response, next) => {
    console.log(request.body.response);
    fs.appendFile('data.txt',' '+request.body.response, function (err) {
        if (err) return console.log(err);
        console.log('message writen');
      });
    response.send('<p>La respuesta correcta es</p><br><p>El archivo package.json es una herramieta que guarda informacion sobre cuales recursos se necesitan para correr tu applicacion. Cuando ejecutas un servidor con este archivo de configuracion, nodemon automaticamente descarga los recursos necesarios. Ademas guarda informacion general de tu applicacion</p>');
});

module.exports = router;