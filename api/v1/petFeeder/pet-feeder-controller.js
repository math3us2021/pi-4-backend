const petFeederBusiness = require("./pet-feeder-business");

const create = async (request, h) => {
  try {
    const payload = request.payload;
    const petFeeder = {
      id: payload.id,
      hourStart: payload.hourStart,
      quantityGrams: payload.quantityGrams,
      petId: payload.petId,
      
    };
    const result = toPayload(await petFeederBusiness.create(petFeeder));
    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response(error).code(500);
  }
};

const findAll = async (request, h) => {
  try {
   
    const result = toPayload(await petFeederBusiness.findAll());
  return h.response(result).code(200);
  } catch (error) {
    console.log(error);
  }
};

const getById = async(request, h) => {
  const id = request.params.id;
  console.log("🚀 ~ file: pet-feeder-controller.js:33 ~ getById ~ id:", id)

  const petFeeder = await petFeederBusiness.findByid(id);

  if (petFeeder) {
    return h.response(petFeeder).code(200);
  }
  return h.response("Not found").code(404);
};

const deletepetFeeder = (request, h) => {
  const id = request.params.id;
  const deleted = petFeederBusiness.deletepetFeeder(id);

  if (deleted) {
    return h.response("Deleted").code(200);
  }
  return h.response("Not found").code(404);
};

const update = (request, h) => {
  const id = request.params.id;
  const petFeeder = request.payload;

  const updated = petFeederBusiness.update(id, petFeeder);

  if (updated) {
    return h.response("Updated").code(200);
  }
  return h.response("Not found").code(404);
};
const toPayload = (petFeederModel) => {

    if (Array.isArray(petFeederModel)) {
        const payload = [];
        petFeederModel.forEach(c => {
            console.log(c);
            payload.push({
                id: c.id,
                hourStart: c.hourStart,
                quantityGrams: c.quantityGrams,
                petId: c.petId,
                
            });
        });
        return payload;
    } else {
        const payload = {
            id: petModel.id,
            hourStart: petModel.hourStart,
            quantityGrams: petModel.quantityGrams,
            petId: petModel.petId,
           
        }
        return payload;
    }
}

module.exports = { findAll, create, getById, deletepetFeeder, update };
