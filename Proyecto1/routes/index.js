
/*
Codigo de con los middlewares de las diferentes rutas
*/
const express = require('express');
const router = express.Router();



const indexControllers = require('../controllers/index')

//Si se accede a la pagina principal
router.get('/', indexControllers.index );

router.get('/products', indexControllers.products)
 
router.post('/newproduct',indexControllers.newProduct)

module.exports = router;// esta linea debe de estár al final del código
 