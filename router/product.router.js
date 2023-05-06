const { find, create, getById } = require("../controllers/product.controller");
const schema = require("../schemas/product.schema");

const router = [
    {
        method: "GET",
        path: "/products",
        handler: find
    },
    {
        method: "GET",
        path: "/products/{id}",
        options: {
            validate: schema.getProductById,
            handler: getById
        }
    },
    {
        method: "POST",
        path: "/products",
        options: {
            validate: schema.postProduct,
            handler: create
        }
    }
];

module.exports = router;