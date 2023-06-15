const { findAll, create, getById, update, deletepet  } = require("./pet-controller");
const schema = require("./pet-schema");

const plugin = {
  name: "pet-v1-routes",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "GET",
        path: "/pets",
        handler: findAll,
      },
      {
        method: "GET",
        path: "/pets/{id}",
        handler: getById,
      },
      {
        method: "POST",
        path: "/pets",
        options: {
          validate: schema.postPet,
          handler: create,
        },
      },
      {
        method: "PUT",
        path: "/pets/{id}",
        options: {
          validate: schema.update,
          handler: update,
        },
      },
      {
        method: "DELETE",
        path: "/pets/{id}",
        options: {
          validate: schema.delete,
          handler: deletepet,
        },
      },
    ]);
  },
};
module.exports = plugin;
