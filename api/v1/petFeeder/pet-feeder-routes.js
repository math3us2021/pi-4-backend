<<<<<<< HEAD
const { findAll, create, getById, update, deletepetFeeder  } = require("./pet-feeder-controller");
=======
const { findAll, create, getById,update,deletepetFeeder } = require("./pet-feeder-controller");
>>>>>>> 022fc3e1748a5be3a129fd66fdf0e4ec85124d4f
const schema = require("./pet-feeder-schema");

const plugin = {
  name: "pet-feeder-v1-routes",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "GET",
        path: "/pet_feeder",
        handler: findAll,
      },
      {
        method: "GET",
        path: "/pet_feeder/{id}",
        options: {
          validate: schema.getById,
          handler: getById,
        },
      },
      {
        method: "POST",
        path: "/pet_feeder",
        options: {
          validate: schema.create,
          handler: create,
        },
      },
      {
        method: "PUT",
        path: "/pet_feeder/{id}",
        options: {
          validate: schema.update,
          handler: update,
        },
      },
      {
        method: "DELETE",
        path: "/pet_feeder/{id}",
        options: {
          validate: schema.delete,
          handler: deletepetFeeder,
        },
      },
    ]);
  },
};
module.exports = plugin;
