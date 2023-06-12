const Sequelize = require("sequelize");
const db = require("../../../config/db");

const food = db.define(
  "food",
  {
    id: {
      type: Sequelize.STRING(36),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    petId: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: "Pet",
        key: "id",
      },
    },
    petFeederId: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: "pet_feeder",
        key: "id",
      },
    },
    dateAliment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    success: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "food",
  }
);

module.exports = food;
