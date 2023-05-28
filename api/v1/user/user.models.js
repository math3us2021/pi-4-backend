const Sequelize = require('sequelize');
const db = require('../../../config/db');

const User = db.sequelize.define('user', {
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
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        field: 'cpf'
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false,
        field: 'telefone'
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'email'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'senha'
    },
    petId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'Pet',
            key: 'id'
        }

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
    tableName: 'Tutor'
});

module.exports = user;