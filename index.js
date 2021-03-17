const express = require('express');

const config = require('./config.js');

const mail = require('./components/mail/network');

const app = express();

app.use(express.json());


//ROUTER
app.use('/mail', mail);

app.listen(config.api.port, ()=>{
    console.log('Server a la escucha -> ' , config.api.port , 'http://localhost:'+config.api.port );
} );