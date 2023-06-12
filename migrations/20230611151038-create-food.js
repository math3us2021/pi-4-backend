"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Food = queryInterface.createTable("food", {
      id: {
        allowNull: false,
        increment: true,
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      petId: {
        allowNull: false,
        type: Sequelize.STRING(36),
        references: {
          model: "pet",
          key: "id",
        },
      },
      petFeederId: {
        allowNull: false,
        type: Sequelize.STRING(36),
        references: {
          model: "pet_feeder",
          key: "id",
        },
      },
      dateAliment: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      success: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      
    });

    return Food;
  },
  down: (queryInterface) => queryInterface.dropTable("Food"),
};
