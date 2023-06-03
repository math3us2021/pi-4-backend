
const plugin = {
    name: "ping-v1-routes",
    version: "1.0.0",
    register: async (server) => {
        server.route([
            {
                method: "GET",
                path: "/ping",
                handler: (request, h) => {
                    return "pong";
                }

            }
        ])
    }
}
module.exports = plugin;