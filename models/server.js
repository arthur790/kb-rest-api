const express = require('express');
const cors = require('cors');
const { sequelize } = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            users: '/api/users'
        };

        //try bd connection
        this.connectarDB();

        //Middlewares
        this.middlewares();
        //expose routes
        this.routes();
    }
    async connectarDB(){

        await sequelize.authenticate();
        await sequelize.sync();
        
    }
    middlewares(){
        //CORS
        this.app.use(cors());

        //read and parse body
        this.app.use(express.json());

    }
    routes(){
        this.app.use( this.paths.auth, require('../routes/auth'));
        this.app.use( this.paths.users, require('../routes/users'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server running on port...', this.port);
        })
    }

}

module.exports = Server;