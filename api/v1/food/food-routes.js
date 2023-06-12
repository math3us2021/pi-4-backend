const { findAll, create, getById } = require("./food-controller");
const schema = require("./food-schema");

const plugin = {
  name: "food-v1-routes",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "GET",
        path: "/food",
        handler: findAll,
      },
      {
        method: "GET",
        path: "/food/{id}",
        options: {
          validate: schema.getById,
          handler: getById,
        },
      },
      {
        method: "POST",
        path: "/food",
        options: {
          validate: schema.create,
          handler: create,
        },
      },
      {
        method: "PUT",
        path: "/food/{id}",
        options: {
          validate: schema.update,
          handler: update,
        },
      },
      {
        method: "DELETE",
        path: "/food/{id}",
        options: {
          validate: schema.delete,
          handler: deletefood,
        },
      },
    ]);
  },
};
module.exports = plugin;
