const Joi = require("joi");

const postConsumer = {
    payload: Joi.object({
        id: Joi
            .number()
            .integer()
            .required(),
        name: Joi
            .string()
            .min(3)
            .max(50)
            .required()
        }).required()
};

module.exports = {postConsumer};