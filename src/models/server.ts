import express, {Application} from 'express';
import db from '../db/connection';
import {router} from "../router/index"
import cors from 'cors';
import {CrearEmpleado, getEmpleado, getEmpleadobyid, updateEmpleado} from "../controllers/empleado";

const bodyParser = require('body-parser')
// import cors from 'cors';
// var cors = require('cors')
class Server{
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = '3011';
        this.cor();
        this.midlewares();
        this.router();
        this.listen();
        this.dbConnect();



    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Aplication corriento ene l ppuerto ${this.port}`)
        })
    }

    dbConnect(){
        try{

            db.authenticate().then();

        }catch (error){
            console.log(error)
        }
    }

    router(){


        this.app.get('/', (request, response) =>{
            response.send({ message: 'Node.js, Express, and MysqleApiixw'})
        });

        this.app.get('/empleado2', getEmpleado)
        this.app.post('/empleado2', CrearEmpleado);
        this.app.put('empleado2/:id', updateEmpleado);
        this.app.get('empleado2/:id', getEmpleadobyid);
        this.app.use(router);
    }
    midlewares(){

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false,
        }))

    }
    cor(){
        this.app.use(cors())
    }

}

export default Server;