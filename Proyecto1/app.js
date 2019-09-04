const express = require('express');
const app = express(); // ejecuta express y se lo asigna a una variable.
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');// Extrae una porciond de la peticion entrante
app.use(bodyParser.urlencoded({extended: false}));//?

//settings
app.set('port',process.env.PORT  || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//view engine, el motor de plantilla que se utiliza. Ejemplo: app.set('view engine', 'pug')



//middlewares o funcion que hace algo
app.use((req, res, next) =>{
    console.log(req.url +"-"+req.method);
    //Imprime la ruta que por defecto envia el navegador y el tipo de metodo que utiliza el request.
    next();
});



//router, establece las rutas que se usarán
app.use(routes);


//start server
app.listen(3000, () =>{
    console.log("Server on port 3000");
});
 
