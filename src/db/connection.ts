import {Sequelize} from "sequelize";
import mysql2 from "mysql2";

const sequelize = new Sequelize('freedb_servicios','freedb_erick','8g8bB4C2!nw@kGW',
    {
        host: 'sql.freedb.tech',
        dialect: 'mysql',
        dialectModule: mysql2,
    });

export default sequelize