const Mascota = require('../models/mascota');

exports.getNuevaMascota = (request, response, next) => {
    //response.send('<form action ="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="adoptar"></form>');
    response.render('nueva_mascota', {titulo:"Nueva mascota"});
};

exports.postNuevaMascota = (request, response, next) => {
    console.log(request.body);
    //Para crear un objeto de nuestro modelo
    const mascota = new Mascota(request.body.nombre,request.body.descripcion, 'https://s1.eestatic.com/2020/08/26/curiosidades/mascotas/mascotas-perros-gatos_515959375_158488465_1706x960.jpg');
    mascota.save();
    
    response.redirect('/mascotas');
};

exports.get = (request, response, next) => {
    const mascotas = Mascota.fetchAll();
    response.render('mascotas', {
        mascotas: mascotas, 
        titulo:"Mascotas"
    });
}