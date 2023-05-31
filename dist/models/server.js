"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../db/connection"));
const index_1 = require("../router/index");
const cors_1 = __importDefault(require("cors"));
const empleado_1 = require("../controllers/empleado");
const bodyParser = require('body-parser');
// import cors from 'cors';
// var cors = require('cors')
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = '3011';
        this.cor();
        this.midlewares();
        this.router();
        this.listen();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplication corriento ene l ppuerto ${this.port}`);
        });
    }
    dbConnect() {
        try {
            connection_1.default.authenticate().then();
        }
        catch (error) {
            console.log(error);
        }
    }
    router() {
        this.app.use(index_1.router);
        this.app.get('/', (request, response) => {
            response.send({ message: 'Node.js, Express, and MysqleApiixc' });
        });
        this.app.get('/empleado2', empleado_1.getEmpleado);
    }
    midlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false,
        }));
    }
    cor() {
        this.app.use((0, cors_1.default)());
    }
}
exports.default = Server;
