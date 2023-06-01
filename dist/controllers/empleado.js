"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmpleado = exports.getEmpleadobyid = exports.CrearEmpleado = exports.getEmpleado = void 0;
const empleado_1 = require("../models/empleado");
const getEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.setHeader("Content-Type", "application/json");
        const employ = yield empleado_1.EmpleadoModel.findAll();
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.status(200).send(employ);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
exports.getEmpleado = getEmpleado;
const CrearEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.setHeader("Content-Type", "application/json");
    yield empleado_1.EmpleadoModel.create(body);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.json({
        msg: 'el producto ha sido agregado3'
    });
    // res.setHeader("Content-Type", "text/html");
    // res.status(200).send(employ);
    // res.send(employ)
});
exports.CrearEmpleado = CrearEmpleado;
const getEmpleadobyid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        res.setHeader("Content-Type", "application/json");
        console.log(id);
        const empleado = yield empleado_1.EmpleadoModel.findByPk(id);
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.status(200).send(empleado);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
exports.getEmpleadobyid = getEmpleadobyid;
const updateEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        res.setHeader("Content-Type", "application/json");
        console.log(req.body);
        const { nombre, apellidoPat, apellidoMat, emaill } = req.body;
        const viejoEmpleado = yield empleado_1.EmpleadoModel.findByPk(id);
        if (viejoEmpleado) {
            const empleadonuevo = yield empleado_1.EmpleadoModel.update(req.body, { where: {
                    id_empleado: id,
                } });
            console.log(viejoEmpleado);
            console.log(empleadonuevo);
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            res.status(200).send(empleadonuevo);
        }
        else {
            res.status(404).json({
                msg: "no existe ese empleado"
            });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: e });
    }
});
exports.updateEmpleado = updateEmpleado;
