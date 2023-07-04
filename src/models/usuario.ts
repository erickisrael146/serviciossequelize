

import {DataTypes} from "sequelize"

import sequelize from "../db/connection"


export const UsuarioModel = sequelize.define('usuario',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuario',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})













