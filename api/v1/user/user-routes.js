const {find,create,getById} = require("./controllers/user.controller");
const schema = require("./api/v1/user/user.schema");

const plugin = {
    name: "user-v1-routes",
    version: "1.0.0",
    register: async (server) => {
        server.route([
            {
                method: "GET",
                path: "/",
                handler: find
            },
            {
                method: "GET",
                path: "/users/{id}",
                options: {
                    validate: schema.getById,
                    handler: getById
                }
            },{
                method: "POST",
                path: "/users",
                options: {
                    validate: schema.create,
                    handler: create,
                }

            }
        ])
    }

}
module.exports = plugin;