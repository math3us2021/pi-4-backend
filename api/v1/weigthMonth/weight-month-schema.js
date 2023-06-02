const Joi = require("joi");

const postWeight = {
  payload: Joi.object({
    id: Joi.number().integer().required(),
    weight: Joi.string().required(),
    width: Joi.string().required(),
    height: Joi.string().required(),
    date: Joi.string().required(),
    WeightId: Joi.string().min(1).max(36).required(),

  }).required(),
};

const getWeight = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const putWeight = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const deleteWeight = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const getAllWeight = {
    query: Joi.object({
        page: Joi.number().integer().required(),
        limit: Joi.number().integer().required(),
    }),
}

module.exports = { postWeight: postWeight, getWeight: getWeight, putWeight: putWeight, deleteWeight: deleteWeight, getAllWeight: getAllWeight };
