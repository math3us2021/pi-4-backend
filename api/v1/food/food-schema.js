const Joi = require("joi");

const postFood= {
  payload: Joi.object({
    id: Joi.number().integer().required(),
    petId: Joi.string().min(1).max(36).required(),
    petFeederId: Joi.string().min(1).max(36).required(),
    dateAliment: Joi.string().min(1).max(36).required(),
    quantity: Joi.string().min(1).max(36).required(),
    success: Joi.boolean().required(),
  }).required(),
};

const getFood = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const putFood = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const deleteFood = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const getAllFood = {
    query: Joi.object({
        page: Joi.number().integer().required(),
        limit: Joi.number().integer().required(),
    }),
}

module.exports = { postFood: postFood, getFood: getFood, putFood: putFood, deleteFood: deleteFood, getAllFood: getAllFood };
