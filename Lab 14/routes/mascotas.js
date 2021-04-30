const express = require('express');
const router = express.Router();
const path = require('path');

const mascotas = [
    {
        nombre: 'Punky',
        descripcion: 'Con punky aprendi a frenar los patines',
        imagen: 'https://t2.uc.ltmcdn.com/images/7/5/5/img_como_cuidar_de_un_cocker_spaniel_5557_orig.jpg'
    },
    {
        nombre: 'Pinky',
        descripcion: 'Conquistamos al mundo',
        imagen: 'https://www.tonica.la/__export/1586036185703/sites/debate/img/2020/04/04/pinky-y-cerebro.jpg_423682103.jpg'
    },
    {
        nombre: 'Maquina',
        descripcion: 'Revoluciono la industria',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Escudo_del_Cruz_Azul_AC.svg/1200px-Escudo_del_Cruz_Azul_AC.svg.png'
    },
    {
        nombre: 'Alacran',
        descripcion: 'Se comio parte de mi carro y ahora uso moto',
        imagen: 'https://www.gaceta.unam.mx/wp-content/uploads/2019/10/190930-aca3-des-f1-escorpion.jpg'
    }
];

router.get('/nueva-mascota', (request, response, next) => {
    //response.send('<form action ="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="adoptar"></form>');
    response.render('nueva_mascota', {titulo:"Nueva mascota"});
});

router.post('/nueva-mascota', (request, response, next) => {
    console.log(request.body);
    mascotas.push({nombre:request.body.nombre, descripcion: 'falta completar', imagen:'https://s1.eestatic.com/2020/08/26/curiosidades/mascotas/mascotas-perros-gatos_515959375_158488465_1706x960.jpg'});
    response.redirect('/mascotas');
    //response.send('Gracias por adoptar a '+request.body.nombre+'!!');
});

router.get('/', (request, response, next) => {
    //response.sendFile(path.join(__dirname, '..', 'views', 'mascotas.html'));
    response.render('mascotas', {mascotas: mascotas, titulo:"Mascotas"});
});

module.exports = router;