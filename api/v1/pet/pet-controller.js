const petBusiness = require("./pet-business");
const enumGenderPet = require("./enum-pet")
const enumTypePet= require('./enum-pet')


const create = async (request, h) => {
  try {
    const payload = request.payload;
    const pet = {
      id: payload.id,
      name: payload.name,
      type: payload.enumTypePet,
      breed: payload.breed,
      gender: payload.enumGenderPet,
      birthDate: payload.birthDate,
      weigth: payload.weigth,
      
    };
    const result = toPayload(await petBusiness.create(pet));
    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response(error).code(500);
  }
};

const findAll = async (request, h) => {
  try {
    // const options = {
    //   pagins: request.query,
    //   filter: request.query,

    // }
    const result = toPayload(await petBusiness.findAll());
  return h.response(result).code(200);
  } catch (error) {
    console.log(error);
  }
};

const getById = async (request, h) => {
  const id = request.params.id;

   const pet = await petBusiness.findByid(id);

  if (pet) {
    return h.response(pet).code(200);
  }
  return h.response("Not found").code(404);
};

const deletepet = (request, h) => {
  const id = request.params.id;
  const deleted = petBusiness.deletepet(id);

  if (deleted) {
    return h.response("Deleted").code(200);
  }
  return h.response("Not found").code(404);
};

const update = (request, h) => {
  const id = request.params.id;
  const pet = request.payload;

  const updated = petBusiness.update(id, pet);

  if (updated) {
    return h.response("Updated").code(200);
  }
  return h.response("Not found").code(404);
};
const toPayload = (petModel) => {

    if (Array.isArray(petModel)) {
        const payload = [];
        petModel.forEach(c => {
            console.log(c);
            payload.push({
                id: c.id,
                name: c.name,
                type: c.type,
                breed: c.breed,
                gender:c.gender,
                birthDate: c.birthDate,
                weigth: c.weigth,
                
            });
        });
        return payload;
    } else {
        const payload = {
            id: petModel.id,
            name: petModel.name,
            type: petModel.type,
            breed: petModel.breed,
            gender:petModel.gender,
            birthDate: petModel.birthDate,
            weigth: petModel.weigth,
           
        }
        return payload;
    }
}

module.exports = { findAll, create, getById, deletepet, update };
