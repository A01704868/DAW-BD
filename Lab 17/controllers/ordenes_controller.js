const Orden = require('../models/orden');

exports.getNuevaOrden = (request, response, next) => {
    //response.send('<form action ="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="adoptar"></form>');
    response.render('nueva_orden', {titulo:"agregar orden"});
};

exports.postNuevaOrden = (request, response, next) => {
    console.log(request.body);
    //Para crear un objeto de nuestro modelo
    const orden = new Orden(request.body.nombre,request.body.cantidad, 'https://www.lasrecetasdelaura.com/wp-content/uploads/2017/05/18471237_10212209555170712_1451222898_n.jpg');
    orden.save();
    
    request.session.ultima_orden = request.body.nombre;

    response.redirect('/ordenes');
};

exports.getOrden = (request, response, next) => {
    response.setHeader('Set-Cookie', 'mascotas=ya vi que te gustan las mascotas; httpOnly');

    console.log(request.cookies.mascotas);

    const ordenes = Orden.fetchAll();
    response.render('ordenes', {
        ordenes: ordenes, 
        titulo:"Ordenes",
        ultima_orden: request.session.ultima_orden === undefined ? "No hay ordenes recientes" : request.session.ultima_orden
    });
}