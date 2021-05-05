const { response } = require("express");
const Incidente = require("../models/incidente");

exports.get = (request, response, next) => {

    //httpOnly prevents cross site scripting
    //response.setHeader('Set-Cookie', 'mascotas=ya vi que te gustan las mascotas; httpOnly');
    
    Incidente.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('incidentes', {
                incidentes: rows, 
                titulo:"Incidentes",
            });
        })
        .catch(err => console.log(err));
}

exports.getNuevoIncidente = (request,response,next) => {
    Incidente.fetchDisponible()
        .then(([rows, fieldData]) => {
            response.render('nuevo_incidente', {
                lista: rows, 
                titulo:"Nuevo Incidente",
            });
        }).catch(err => console.log(err));
}

exports.postNuevoIncidente = (request, response, next) => {
    const incidente = new Incidente(request.body.tipo,request.body.lugar);
    console.log(request.body.tipo);
    console.log(request.body.lugar);
    incidente.save()
        .then(() => {
            response.redirect('/incidentes');
        }).catch(err => {
            //console.log(err);
            response.redirect('/incidentes/nuevo-incidente');
        });
};