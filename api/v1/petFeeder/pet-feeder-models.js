const Sequelize = require('sequelize');
const db = require('../../../config/db');

const petFeeder = db.define('pet-feeder', {
    id: {
        type: Sequelize.STRING(36),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    hourStart: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantityGrams:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    petId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'Pet',
            key: 'id'
        }

    }
   
}, {
    timestamps: false,
    tableName: 'PetFeeder',
});

module.exports = petFeeder;