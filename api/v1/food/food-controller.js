const foodBusiness = require("./food-business");

const create = async (request, h) => {
  try {
    const payload = request.payload;
    const food = {
      id: payload.id,
      petId: payload.petId,
      petFeederId: payload.petFeederId,
      dateAliment: payload.dateAliment,
      quantity: payload.quantity,
      success: payload.success,
      
    };
    const result = toPayload(await foodBusiness.create(food));
    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response(error).code(500);
  }
};

const findAll = async (request, h) => {
  try {
   
    const result = toPayload(await foodBusiness.findAll());
  return h.response(result).code(200);
  } catch (error) {
    console.log(error);
  }
};

const getById = (request, h) => {
  const id = request.params.id;

  const food = foodBusiness.findByid(id);

  if (food) {
    return h.response(food).code(200);
  }
  return h.response("Not found").code(404);
};
const deletefood = (request, h) => {
  const id = request.params.id;
  const deleted = foodBusiness.deletefood(id);

  if (deleted) {
    return h.response("Deleted").code(200);
  }
  return h.response("Not found").code(404);
};

const update = (request, h) => {
  const id = request.params.id;
  const food = request.payload;

  const updated = foodBusiness.update(id, food);

  if (updated) {
    return h.response("Updated").code(200);
  }
  return h.response("Not found").code(404);
};
const toPayload = (foodModel) => {

    if (Array.isArray(foodModel)) {
        const payload = [];
        foodModel.forEach(c => {
            console.log(c);
            payload.push({
                id: c.id,
                petId: c.petId,
                petFeederId: c.petFeederId,
                dateAliment: c.dateAliment,
                quantity: c.quantity,
                success: c.success,
                
            });
        });
        return payload;
    } else {
        const payload = {
            id: foodModel.id,
            petId: foodModel.petId,
            petFeederId: foodModel.petFeederId,
            dateAliment: foodModel.dateAliment,
            quantity: foodModel.quantity,
            success: foodModel.success,
           
           
        }
        return payload;
    }
}

module.exports = { findAll, create, getById,  deletefood, update };
