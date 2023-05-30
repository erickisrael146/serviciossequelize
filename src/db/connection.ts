import {Sequelize} from "sequelize";

const sequelize = new Sequelize('freedb_servicios','freedb_erick','8g8bB4C2!nw@kGW',
    {
        host: 'sql.freedb.tech',
        dialect: 'mysql'
    });

export default sequelize