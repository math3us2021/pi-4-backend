const {findAll,create,getById} = require("./pet-controller");
const schema = require("./pet-schema");

const plugin = {
    name: "pet-v1-routes",
    version: "1.0.0",
    register: async (server) => {
        server.route([
            {
                method: "GET",
                path: "/pets",
                handler: findAll
            },
            {
                method: "GET",
                path: "/pets/{id}",
                options: {
                    validate: schema.getById,
                    handler: getById
                }
            },{
                method: "POST",
                path: "/pets",
                options: {
                    validate: schema.create,
                    handler: create,
                }

            }
        ])
    }

}
module.exports = plugin;