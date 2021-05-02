const express = require('express');
//declarar un router de express
const router = express.Router();
const path = require('path');

const usuariosController = require('../controllers/usuarios_controller');

router.get('/logout', usuariosController.logout);

module.exports = router;