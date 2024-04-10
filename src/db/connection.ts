import {Sequelize} from "sequelize";
import mysql2 from "mysql2";

const sequelize = new Sequelize('freedb_servicios','freedb_erick','hARcY&2M&KU93y2',
    {
        host: 'sql.freedb.tech',
        dialect: 'mysql',
        dialectModule: mysql2,
    });

export default sequelize
