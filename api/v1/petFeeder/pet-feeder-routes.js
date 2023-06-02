const {findAll,create,getById} = require("./pet-feeder-controller");
const schema = require("./pet-feeder-schema");

const plugin = {
    name: "pet-v1-routes",
    version: "1.0.0",
    register: async (server) => {
        server.route([
            {
                method: "GET",
                path: "/pet_feeder",
                handler: findAll
            },
            {
                method: "GET",
                path: "/pet_feeder/{id}",
                options: {
                    validate: schema.getById,
                    handler: getById
                }
            },{
                method: "POST",
                path: "/pet_feeder",
                options: {
                    validate: schema.create,
                    handler: create,
                }

            }
        ])
    }

}
module.exports = plugin;