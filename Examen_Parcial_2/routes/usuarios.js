const express = require('express');
//declarar un router de express
const router = express.Router();
const path = require('path');

//const isAuth = require('../util/is-auth.js');

const usuariosController = require('../controllers/usuarios_controller');

router.get('/logout', usuariosController.logout);

router.get('/new', usuariosController.getNewUser);

router.post('/new', usuariosController.postNewUser);

router.get('/login', usuariosController.getLogin);

router.post('/login', usuariosController.postLogin);

module.exports = router;