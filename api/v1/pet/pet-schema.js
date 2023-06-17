const Joi = require("joi");

const postPet = {
  payload: Joi.object({
    name: Joi.string().min(3).max(50).required(),
    type: Joi.string().min(3).max(50).required(),
    breed: Joi.string().min(3).max(50).required(),
    gender: Joi.string().min(3).max(50).required(),
    birthDate: Joi.string().min(3).max(50).required(),
    weigth: Joi.number().integer().required(),

  }).required(),
};

const getPet = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const putPet = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const deletePet = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const getAllPet = {
    query: Joi.object({
        page: Joi.number().integer().required(),
        limit: Joi.number().integer().required(),
    }),
}

module.exports = { postPet: postPet, getPet: getPet, putPet: putPet, deletePet: deletePet, getAllPet: getAllPet };
