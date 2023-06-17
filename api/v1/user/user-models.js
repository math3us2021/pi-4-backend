const Sequelize = require('sequelize');
const db = require('../../../config/db');

const User = db.define('user', {
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
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
       
    }
}, {
    timestamps: false,
    tableName: 'user',
});

module.exports = User;