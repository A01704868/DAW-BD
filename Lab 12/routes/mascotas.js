const express = require('express');
const router = express.Router();

router.get('/nueva-mascota', (request, response, next) => {
    response.send('<form action ="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="adoptar"></form>');
});

router.post('/nueva-mascota', (request, response, next) => {
    console.log(request.body);
    response.send('Gracias por adoptar a '+request.body.nombre+'!!');
});

module.exports = router;