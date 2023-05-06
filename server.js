const Hapi = require("@hapi/hapi");
const consumerRouter = require("./router/consumer");
const productRouter = require("./router/product.router");


const server = Hapi.server({
    port: 8000,
    host: "localhost"
});

consumerRouter.forEach((path) => server.route(path));
productRouter.forEach((path) => server.route(path));

module.exports = server;