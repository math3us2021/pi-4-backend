const userBusiness = require("./user-business");

const create = async (request, h) => {
  try {
    const payload = request.payload;
    const user = {
      id: payload.id,
      name: payload.name,
      cpf: payload.cpf,
      email: payload.email,
      phone: payload.phone,
      password: payload.password,
      petId: payload.petId,
      
    };
    const result = toPayload(await userBusiness.create(user));
    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response(error).code(500);
  }
};

const find = async  (request, h) => {
  try{
    const result = await userBusiness.findAll();
    console.log(Array.isArray(result));
    return h.response(result).code(200);
    }catch(error){
        console.log(error);
        return h.response(error).code(500);
  }
};

const getById = (request, h) => {
  const id = request.params.id;

  const user = userBusiness.findByid(id);

  if (user) {
    return h.response(user).code(200);
  }
  return h.response("Not found").code(404);
};
const deleteUser = (request, h) => {
  const id = request.params.id;
  const deleted = userBusiness.deleteUser(id);

  if (deleted) {
    return h.response("Deleted").code(200);
  }
  return h.response("Not found").code(404);
};

const update = (request, h) => {
  const id = request.params.id;
  const user = request.payload;

  const updated = userBusiness.update(id, user);

  if (updated) {
    return h.response("Updated").code(200);
  }
  return h.response("Not found").code(404);
};
const toPayload = (userModel) => {

    if (Array.isArray(userModel)) {
        const payload = [];
        userModel.forEach(c => {
            console.log(c);
            payload.push({
                id: c.id,
                name: c.name,
                cpf: c.cpf,
                email: c.email,
                phone: c.phone,
                password: c.password,
                petId:c.petId,
                
            });
        });
        return payload;
    } else {
        const payload = {
            id: userModel.id,
            name: userModel.name,
            cpf: userModel.cpf,
            email: userModel.email,
            phone: userModel.phone,
            password: userModel.password,
            petId:userModel.petId,
           
        }
        return payload;
    }
}

module.exports = { find, create, getById, deleteUser, update };
