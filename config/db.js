const Sequelize = require('sequelize');

const sequelizeConfig = {
    logging: console.log,
    dialect: 'mysql2',
    port: 3306, //mysql 3306
    host: 'localhost',
    pool: 2
};

const sequelize = new Sequelize('pet', 'mysql2', '210396', sequelizeConfig);

module.exports = {sequelize};