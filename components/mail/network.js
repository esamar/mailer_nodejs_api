const express = require('express');
const controller = require('./index');
const router = express.Router();

router.post('/', send);

function send (req, res, next) {

    controller.send(req.body)
        .then((info)=>{

            console.log(info);
            
            res.status(200).send({
                error: false,
                stats: 200,
                body: 'Se ha enviado correctamente! :)',
                data: info,
            });

        })
        .catch((err)=>{

            console.log(info);
            
            res.status(400).send({
                error: true,
                stats: 400,
                body: 'Ha ocurrido un error! :(',
                data: info,
            });

        });


    // controller.upsert(req.body)        
    //     .then((user)=>{
    //         response.success(req , res, user, 200);
    //     })
    //     .catch(next);

        // .catch( (err)=>{
        //     response.error(req , res, err.message, 500);
        // });
};

module.exports = router;