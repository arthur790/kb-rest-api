const express = require('express');
const cors = require('cors');
//const { dbConnection } = require('../database/config');
//const  fileUpload = require('express-fileupload');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
        };

        //conectar con la base de datos
        this.connectarDB();

        //Middlewares
        this.middlewares();
        this.routes();
    }
    async connectarDB(){
        //await dbConnection();
    }
    middlewares(){
        //CORS
        this.app.use(cors());

        //lectura y parseo de body
        this.app.use(express.json());

    }
    routes(){
        this.app.use( this.paths.auth, require('../routes/auth'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en puerto', this.port);
        })
    }

}

module.exports = Server;