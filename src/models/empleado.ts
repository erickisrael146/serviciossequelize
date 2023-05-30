import {DataTypes} from "sequelize"

import sequelize from "../db/connection"


export const EmpleadoModel = sequelize.define('empleado',{
    id_empleado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidoPat: {
        type: DataTypes.STRING
    },
    apellidoMat: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    activo: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'empleado',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})