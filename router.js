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
        path: "/consumers",
        handler: find
    },
    {
        method: "GET",
        path: "/consumers/{id}",
        options: {
            validate: schema.getConsumer,
            handler: getById
        }
    },
    {
        method: "POST",
        path: "/consumers",
        options: {
            validate: schema.postConsumer,
            handler: create
        }
    }
];

module.exports = router;