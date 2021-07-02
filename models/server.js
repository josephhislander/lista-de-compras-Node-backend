const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    
    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:       '/api/auth',
            listas:     '/api/listas',
            productos:  '/api/productos',
            usuarios:   '/api/usuarios',
        }

        //Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
        
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Parseo y lectura del body 
        this.app.use( express.json());

        //Directorio publico
        this.app.use( express.static('public'));
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.listas, require('../routes/listas'));
        this.app.use(this.paths.usuarios, require('../routes/user'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        })
    }

}

module.exports = Server;
