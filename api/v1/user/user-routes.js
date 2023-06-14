const {find,create,getById,deleteUser,update} = require("./user-controller");
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

            },{
                method: "PUT",
                path: "/users/{id}",
                options: {
                    validate: schema.update,
                    handler: update,
                }
            },{
                method: "DELETE",
                path: "/users/{id}",
                options: {
                    validate: schema.delete,
                    handler: deleteUser,
                }
            }
        ])
    }

}
module.exports = plugin;