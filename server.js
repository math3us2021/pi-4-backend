const Hapi = require("@hapi/hapi");
const routes = require('./config/routes');
const sequelize = require('./config/db');

const server = Hapi.server({
    port:  process.env.PORT || 8080,
    host: "localhost",
    routes: {
        cors: {
            origin: ['*'],
            credentials: true
        }
    }
});

const plugins = [
    {
        plugin: routes, options: {
            routesBaseDir: './api',
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