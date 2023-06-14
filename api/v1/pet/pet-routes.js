<<<<<<< HEAD
const { findAll, create, getById, update, deletepet  } = require("./pet-controller");
=======
const { findAll, create, getById,update,deletepet } = require("./pet-controller");
>>>>>>> 022fc3e1748a5be3a129fd66fdf0e4ec85124d4f
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
        // options: {
          // validate: schema.getById,
        // },
      },
      {
        method: "POST",
        path: "/pets",
        options: {
          validate: schema.create,
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
