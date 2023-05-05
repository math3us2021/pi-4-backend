const {find, create, getById} = require("./controllers/consumer.controller");
const schema = require("./schemas/consumer.schema");

const router = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Hello world";
        }
    },
    {
        method: "GET",
        path: "/users",
        handler: find
    },
    {
        method: "GET",
        path: "/users/{id}",
        options: {
            validate: schema.getConsumer,
            handler: getById
        }
    },
    {
        method: "POST",
        path: "/users",
        options: {
            validate: schema.postConsumer,
            handler: create
        }
    }
];

module.exports = router;