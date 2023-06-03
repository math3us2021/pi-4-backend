const Sequelize = require('sequelize');
const db = require('../../../config/db');

const WeightMonth = db.define('weight_month', {
    id: {
        type: Sequelize.STRING(36),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    width:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    height:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    date:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    age_per_month:{
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
    tableName: 'weight_month',
});

module.exports = WeightMonth;