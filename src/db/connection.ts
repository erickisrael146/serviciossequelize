import {Sequelize} from "sequelize";
import mysql2 from "mysql2";


const sequelize = new Sequelize('freedb_servicioss','freedb_erick','tHu?Y6p#9%cMr#2',


    {
        host: 'sql.freedb.tech',
        dialect: 'mysql',
        dialectModule: mysql2,
    });

export default sequelize
