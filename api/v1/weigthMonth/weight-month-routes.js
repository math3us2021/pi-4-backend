const {findAll,create,getById, update, deleteweightMonth} = require("./weight-month-controller");
const schema = require("./weight-month-schema");

const plugin = {
    name: "weight-month-v1-routes",
    version: "1.0.0",
    register: async (server) => {
        server.route([
            {
                method: "GET",
                path: "/weight_month",
                handler: findAll
            },
            {
                method: "GET",
                path: "/weight_month/{id}",
                handler: getById
            },{
                method: "POST",
                path: "/weight_month",
                options: {
                    validate: schema.create,
                    handler: create,
                }

            },{
                method: "PUT",
                path: "/weight_month/{id}",
                options: {
                    validate: schema.update,
                    handler: update,
                } 
            },{
                method: "DELETE",
                path: "/weight_month/{id}",
                options: {
                    validate: schema.delete,
                    handler: deleteweightMonth,
                }
            }
        ])
    }

}
module.exports = plugin;