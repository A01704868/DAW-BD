const Orden = require('../models/orden');

exports.getNuevaOrden = (request, response, next) => {
    //response.send('<form action ="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="adoptar"></form>');
    response.render('nueva_orden', {titulo:"agregar orden"});
};

exports.postNuevaOrden = (request, response, next) => {
    console.log(request.body);
    //Para crear un objeto de nuestro modelo
    const orden = new Orden(request.body.nombre,request.body.cantidad, 'https://www.lasrecetasdelaura.com/wp-content/uploads/2017/05/18471237_10212209555170712_1451222898_n.jpg');
    orden.save()
        .then(() => {
            request.session.ultima_orden = request.body.nombre;
            response.redirect('/ordenes');
        }).catch(err => {
            console.log(err);
            response.redirect('/ordenes/nueva-orden');
        });
};

exports.getUpdate = (request, response, next) => {
    //response.send('<form action ="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="adoptar"></form>');
    response.render('update_orden', {titulo:"update orden"});
};

exports.postUpdate = (request, response, next) => {
    console.log(request.body);
    //Para crear un objeto de nuestro modelo
    Orden.update(request.body.id,request.body.cantidad)
        .then(() => {
            request.session.ultima_orden = request.body.nombre;
            response.redirect('/ordenes');
        }).catch(err => {
            console.log(err);
            response.redirect('/ordenes/update-orden');
        });
};

exports.getOrdenes = (request, response, next) => {
    response.setHeader('Set-Cookie', 'mascotas=ya vi que te gustan las mascotas; httpOnly');

    console.log(request.cookies.mascotas);

    Orden.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('ordenes', {
                ordenes: rows, 
                titulo:"Ordenes",
                ultima_orden: request.session.ultima_orden === undefined ? "No hay ordenes recientes" : request.session.ultima_orden
            });
        })
        .catch(err => console.log(err));
}

exports.getOrden = (request, response, next) => {
    const id = request.params.orden_id;

    Orden.fetchOne(id)
        .then(([rows, fieldData]) => {
            response.render('ordenes', {
                oredenes: rows, 
                titulo:"Ordenes",
                ultima_orden: request.session.ultima_orden === undefined ? "No hay ordenes recientes" : request.session.ultima_ordenes
            });
        })
        .catch(err => console.log(err));
}