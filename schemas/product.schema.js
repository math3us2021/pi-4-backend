const Joi = require("joi");

const postProduct = {
    payload: Joi.object({
        id: Joi.number().integer().required(),
        ean: Joi.number().integer(),
        title: Joi.string().min(3).max(50).required(),
        brand: Joi.string().required(),
        attributes: Joi.array().items(Joi.object({
            type: Joi.string().required(),
            value: Joi.string().required(),
            label: Joi.string().required()
        })),
        cost_value: Joi.number().required(),
        sell_value: Joi.number().required(),
        categories: Joi.array().items(Joi.object({
            id: Joi.string().required(),
            name: Joi.string().required()
        })).required()
    }).required(),

};

const getProduct = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
    }),
    query: Joi.object({
        title: Joi.string().min(3).max(50).required(),
        brand: Joi.string().required(),
        attributes: Joi.array().items(Joi.object({
            type: Joi.string().required(),
            value: Joi.string().required(),
        })).required()
    }).optional()
};

const getProductById = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
    })
};

module.exports = { postProduct, getProduct, getProductById };