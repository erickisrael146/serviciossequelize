"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.EmpleadoModel = connection_1.default.define('empleado', {
    id_empleado: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidoPat: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidoMat: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    activo: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: 'empleado',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});
