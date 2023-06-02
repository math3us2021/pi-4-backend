const weightMonthBusiness = require("./weight-month-business");

const create = async (request, h) => {
  try {
    const payload = request.payload;
    const weightMonth = {
      id: payload.id,
      weight: payload.weight,
      width: payload.width,
      height: payload.height,
      date: payload.date,
      petId: payload.petId,
      
    };
    const result = toPayload(await weightMonthBusiness.create(weightMonth));
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
    const result = toPayload(await weightMonthBusiness.findAll());
  return h.response(result).code(200);
  } catch (error) {
    console.log(error);
  }
};

const getById = (request, h) => {
  const id = request.params.id;

  const weightMonth = weightMonthBusiness.findByid(id);

  if (weightMonth) {
    return h.response(weightMonth).code(200);
  }
  return h.response("Not found").code(404);
};
const deleteweightMonth = (request, h) => {
  const id = request.params.id;
  const deleted = weightMonthBusiness.deleteweightMonth(id);

  if (deleted) {
    return h.response("Deleted").code(200);
  }
  return h.response("Not found").code(404);
};

const update = (request, h) => {
  const id = request.params.id;
  const weightMonth = request.payload;

  const updated = weightMonthBusiness.update(id, weightMonth);

  if (updated) {
    return h.response("Updated").code(200);
  }
  return h.response("Not found").code(404);
};
const toPayload = (weightMonthModel) => {

    if (Array.isArray(weightMonthModel)) {
        const payload = [];
        weightMonthModel.forEach(c => {
            console.log(c);
            payload.push({
                id: c.id,
                weight: c.weight,
                width: c.width,
                height: c.height,
                date: c.date,
                petId: c.petId,
                
            });
        });
        return payload;
    } else {
        const payload = {
            id: weightMonthModel.id,
            weight: weightMonthModel.weight,
            width: weightMonthModel.width,
            height: weightMonthModel.height,
            date: weightMonthModel.date,
            petId: weightMonthModel.petId,
           
        }
        return payload;
    }
}

module.exports = { findAll, create, getById, deleteweightMonth, update };
