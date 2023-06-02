"use strict";


module.exports = {
  up: (queryInterface, Sequelize) => {
    const User = queryInterface.createTable('user',{
        id: {
          allowNull: false,
          increment: true,                                                 
          type: Sequelize.STRING(36),
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        cpf: {
          type: Sequelize.STRING(11),
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING(11),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        petId: {
          allowNull: false,
          type: Sequelize.STRING(36),
          references: {
            model: 'pet',
            key: 'id',
          },
        }
      });

    return User;
  },
  down: (queryInterface) => queryInterface.dropTable("User"),
};
