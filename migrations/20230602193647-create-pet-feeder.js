"use strict";


module.exports = {
  up: (queryInterface, Sequelize) => {
    const PetFeeder = queryInterface.createTable('pet_feeder',{
        id: {
          allowNull: false,
          increment: true,                                                 
          type: Sequelize.STRING(36),
          primaryKey: true,
        },
        hourStart: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        quantityGrams:{
          type: Sequelize.STRING,
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

    return PetFeeder;
  },
  down: (queryInterface) => queryInterface.dropTable("Pet_feeder"),
};
