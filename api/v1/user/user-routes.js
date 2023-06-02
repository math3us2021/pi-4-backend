const {find,create,getById} = require("./user-controller");
const schema = require("./user-schema");

const plugin = {
    name: "user-v1-routes",
    version: "1.0.0",
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/user",
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