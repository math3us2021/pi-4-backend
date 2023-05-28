const petBusiness = require("../business/pet.business");

const create = async (request, h) => {
  try {
    const payload = request.payload;
    const pet = {
      name: payload.name,
      type: payload.type,
      breed: payload.breed,
      gender: payload.gender,
      birthdate: payload.birthdate,
      weigth: payload.weigth,
      
    };
    const result = toPayload(await petBusiness.create(pet));
    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response(error).code(500);
  }
};

const find = async  (request, h) => {
  try{
    const result = await petBusiness.findAll();
    console.log(Array.isArray(result));
    return h.response(result).code(200);
    }catch(error){
        console.log(error);
        return h.response(error).code(500);
  }
};

const getById = (request, h) => {
  const id = request.params.id;

  const pet = petBusiness.findByid(id);

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
                birthdate: c.birthdate,
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
            birthdate: petModel.birthdate,
            weigth: petModel.weigth,
           
        }
        return payload;
    }
}

module.exports = { find, create, getById, deletepet, update };
