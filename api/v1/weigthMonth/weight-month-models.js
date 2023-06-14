const Sequelize = require("sequelize");
const db = require("../../../config/db");
const petFeeder = require("../petFeeder/pet-feeder-models");

const WeightMonth = db.define(
  "weight_month",
  {
    id: {
      type: Sequelize.STRING(36),
      autoIncrement: true,
      allowNull: false,
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
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Pet",
        key: "id",
      },
    },
    petFeederId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "pet_feeder",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "weight_month",
  }
);

module.exports = WeightMonth;
