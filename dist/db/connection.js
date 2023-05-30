"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('freedb_servicios', 'freedb_erick', '8g8bB4C2!nw@kGW', {
    host: 'sql.freedb.tech',
    dialect: 'mysql'
});
exports.default = sequelize;
