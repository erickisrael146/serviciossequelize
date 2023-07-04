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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.updateUsuario = exports.getUsuariobyid = exports.CrearUsuario = exports.getUsuario = void 0;
const usuario_1 = require("../models/usuario");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.setHeader("Content-Type", "application/json");
        const employ = yield usuario_1.UsuarioModel.findAll();
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
exports.getUsuario = getUsuario;
const CrearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { name, password } = req.body;
    res.setHeader("Content-Type", "application/json");
    const hashedPasword = yield bcrypt_1.default.hash(password, 10);
    try {
        const usuario = yield usuario_1.UsuarioModel.findOne({ where: { name: name } });
        if (usuario) {
            return res.status(400).json({
                msg: 'ya existe el usuairo'
            });
        }
        console.log(hashedPasword);
        yield usuario_1.UsuarioModel.create({
            name: name,
            password: hashedPasword
        });
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        res.json({
            msg: 'el usuario ha sido agregado3'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ha ocurrido un error'
        });
    }
    // res.setHeader("Content-Type", "text/html");
    // res.status(200).send(employ);
    // res.send(employ)
});
exports.CrearUsuario = CrearUsuario;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { name, password } = req.body;
    res.setHeader("Content-Type", "application/json");
    try {
        const usuario = yield usuario_1.UsuarioModel.findOne({ where: { name: name } });
        if (!usuario) {
            return res.status(400).json({
                msg: 'no existe un usuario con ese nombre'
            });
        }
        console.log(usuario);
        const passwordValid = yield bcrypt_1.default.compare(password, usuario.dataValues.password);
        if (!passwordValid) {
            return res.status(400).json({
                msg: 'password incorrecto'
            });
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        const token = jsonwebtoken_1.default.sign({
            name: name
        }, 'xxxx');
        res.json({
            msg: token
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ha ocurrido un error'
        });
    }
    // res.setHeader("Content-Type", "text/html");
    // res.status(200).send(employ);
    // res.send(employ)
});
exports.Login = Login;
const getUsuariobyid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        res.setHeader("Content-Type", "application/json");
        console.log(id);
        const empleado = yield usuario_1.UsuarioModel.findByPk(id);
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
exports.getUsuariobyid = getUsuariobyid;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        res.setHeader("Content-Type", "application/json");
        console.log(req.body);
        const { nombre, apellidoPat, apellidoMat, emaill } = req.body;
        const viejoEmpleado = yield usuario_1.UsuarioModel.findByPk(id);
        if (viejoEmpleado) {
            const empleadonuevo = yield usuario_1.UsuarioModel.update(req.body, { where: {
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
exports.updateUsuario = updateUsuario;
