const express = require('express');
const router = express.Router();
const path = require('path');

const isAuth = require('../util/is-auth.js');

const incidentesController = require('../controllers/incidentes_controller');

router.get('/', isAuth, incidentesController.get);

router.get('/nuevo-incidente', isAuth, incidentesController.getNuevoIncidente);
router.post('/nuevo-incidente', isAuth, incidentesController.postNuevoIncidente);


module.exports = router;