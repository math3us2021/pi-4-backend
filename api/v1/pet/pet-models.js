const Sequelize = require('sequelize');
const db = require('../../../config/db');
const food = require('../food/food-models');
const petFeeder = require('../petFeeder/pet-feeder-models');
const WeightMonth = require('../weigthMonth/weight-month-models');


const pet = db.define('pet', {
    id: {
        type: Sequelize.STRING(36),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
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
        type: Sequelize.STRING,
        allowNull: false,
    },
    weigth:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'Pet',
});

module.exports = pet;


