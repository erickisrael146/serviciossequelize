"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql2_1 = __importDefault(require("mysql2"));
const sequelize = new sequelize_1.Sequelize('freedb_servicios', 'freedb_erick', '8g8bB4C2!nw@kGW', {
    host: 'sql.freedb.tech',
    dialect: 'mysql',
    dialectModule: mysql2_1.default,
});
exports.default = sequelize;
