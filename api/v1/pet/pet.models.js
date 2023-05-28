const Sequelize = require('sequelize');
const db = require('../../../config/db');

const Pet = db.sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(36),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    breed:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    birthDate:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    weigth:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    createAt:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    updateAt:{
        type: Sequelize.DATE,
        allowNull: false,
    }
    

}, {
    timestamps: false,
    tableName: 'pet'
});

module.exports = Pet;