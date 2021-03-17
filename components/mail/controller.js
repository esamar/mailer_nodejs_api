"use strict";

const nodemailer = require("nodemailer");

const config = require('../../config');

// async..await is not allowed in global scope, must use a wrapper
async function send( data ) 
{
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: config.smtp.host,
        port: config.smtp.port,
        secure: false, // true for 465, false for other ports
        auth: {
        user: config.smtp.user, // generated ethereal user
        pass: config.smtp.password, // generated ethereal password
        },
    });

    let info = await transporter.sendMail( data );

    return info;

    //   console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);

















module.exports = {
    send,
}
// const auth = require('../auth');
// const TABLA = 'user';

// module.exports = function ( injectedStore ){

//     let store = injectedStore;
//     if ( !store )
//     {
//         store = require('../../../store/mysql');
//     }

//     function list()
//     {
//         return store.list(TABLA);
//     }

//     function get( id )
//     {
//         return store.get(TABLA, id);
//     }

//     async function upsert(body)
//     {
//         const user = {
//             name: body.name,
//             username: body.username,
//         }

//         if ( body.id)
//         {
//             user.id = body.id;
//         }
//         else
//         {
//             user.id = nanoid();
//         }

//         if ( body.password || body.username )
//         {
//             await auth.upsert({
//                 id: user.id,
//                 username: user.username,
//                 password: body.password,
//             });

//         }

//         return store.upsert(TABLA, user);

//     }

//     return {
//         list,
//         get,
//         upsert,
//     };
// }