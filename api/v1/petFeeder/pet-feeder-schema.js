const Joi = require("joi");

const postPetFeeder = {
  payload: Joi.object({
    id: Joi.number().integer().required(),
    hourStart: Joi.string().required(),
    quantityGrams: Joi.string().required(),
    petId: Joi.string().min(1).max(36).required(),
  }).required(),
};

const getPetFeeder = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const putPetFeeder = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const deletePetFeeder = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const getAllPetFeeder = {
    query: Joi.object({
        page: Joi.number().integer().required(),
        limit: Joi.number().integer().required(),
    }),
}

module.exports = { postPetFeeder: postPetFeeder, getPetFeeder: getPetFeeder, putPetFeeder: putPetFeeder, deletePetFeeder: deletePetFeeder, getAllPetFeeder: getAllPetFeeder };
