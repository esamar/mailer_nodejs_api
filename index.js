const express = require('express');

const config = require('./config.js');

const mail = require('./components/mail/network');

const app = express();

app.use(express.json());


//ROUTER
app.use('/mail', mail);

app.use('/', function(req, res){

    res.status(200).send('<marquee>Bienvenido al servicio de mailing transac de UMC -  Revise la documentación para continuar</marquee>');

});

app.listen(config.api.port, ()=>{
    console.log('Server a la escucha -> ' , config.api.port , 'http://localhost:'+config.api.port );
} );