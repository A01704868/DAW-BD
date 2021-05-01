const express = require('express');
const router1 = express.Router();
const path = require('path');

const ordenesController = require('../controllers/ordenes_controller');


router1.get('/nueva-orden', ordenesController.getNuevaOrden);

router1.post('/nueva-orden', ordenesController.postNuevaOrden);

router1.get('/', ordenesController.getOrden);

module.exports = router1;