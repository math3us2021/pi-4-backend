const {findAll,create,getById} = require("./weight-month-controller");
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
                path: "/weigth_month/{id}",
                options: {
                    validate: schema.getById,
                    handler: getById
                }
            },{
                method: "POST",
                path: "/weigth_month",
                options: {
                    validate: schema.create,
                    handler: create,
                }

            }
        ])
    }

}
module.exports = plugin;