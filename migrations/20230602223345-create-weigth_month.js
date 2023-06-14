"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const WeightMonth = queryInterface.createTable("weight_month", {
      id: {
        allowNull: false,
        increment: true,
        type: Sequelize.STRING(36),
        primaryKey: true,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      width: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      age_per_month: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantityMonth: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
    });

    return WeightMonth;
  },
  down: (queryInterface) => queryInterface.dropTable("Weight_month"),
};
