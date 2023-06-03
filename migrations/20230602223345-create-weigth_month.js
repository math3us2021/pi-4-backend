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
        type: Sequelize.STRING,
        allowNull: false,
      },
      age_per_month: {
        type: Sequelize.STRING,
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
    });

    return WeightMonth;
  },
  down: (queryInterface) => queryInterface.dropTable("Weight_month"),
};
