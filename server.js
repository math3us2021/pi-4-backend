const Hapi = require("@hapi/hapi");
const HapiCors = require('hapi-cors');
const routes = require('./config/routes');
const sequelize = require('./config/db');

const server = Hapi.server({
    port:  process.env.PORT || 8080,
    host: "0.0.0.0",
});


const plugins = [
    {
        plugin: routes, HapiCors, options: {
            routesBaseDir: './api',
            origins: ['*'] // Permitir todas as origens (restringir conforme necessário)
        }
    }
]
server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
        return "Hello World";
    }
})

sequelize.authenticate()
  .then(() => {
    console.log('Connected to database')
    sequelize.sync({ force: false })
  })
  .catch(error => console.error('Unable to connect to the database:', error));

module.exports = {server, plugins}; 