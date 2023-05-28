"use strict";


module.exports = {
  up: (queryInterface, Sequelize) => {
    const Pet = queryInterface.createTable('pet',{
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
        type: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        breed: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING(150),
          allowNull: false,
        },
        birthDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        weigth: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },

        createAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        updateAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
      });

    return Pet;
  },
  down: (queryInterface) => queryInterface.dropTable("Pet"),
};
