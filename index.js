const express = require('express');
const hbs = require('express-handlebars');

const app = express();

//para definir la carpeta publica
app.use(express.static('public'));

//para registrar el motor de render de handlebars
app.engine('handlebars', hbs());

//para setear el motor de render a utilizar
app.set('view engine', 'handlebars');

//para importar el modulo body-parser
var bodyparser = require('body-parser');
//configurar el modulo body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
//usar body-parser
app.use(express.json());

// importar archivo personas
var personas = require('./personas');
//console.log(personas);


//este envio mensaje
`}app.get('/',function(req,res){
    res.send('test');
});`

//envio el view
app.get('/',function(req,res){
    var contexto = {
        texto: 'Mi texto de prueba para el home',
        lista: personas,
    };
    res.render('home', contexto);
});

//definir ruta para agregar
app.post('/agregar', function(req,res){
    personas.push({
        nombre: req.body.nombre,
        edad: req.body.edad,
    });
    res.send('ok agregado');
});

//iniciar el servidor en el puerto
app.listen(5500);