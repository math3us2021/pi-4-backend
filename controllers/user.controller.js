const userBusiness = require("../business/user.business");

const create = (request, h) => {

    userBusiness.create(request.payload);
    return "created";
}

const find = (request, h) => {
    return userBusiness.findAll();
}

const getById =  (request, h) => {
    const id = request.params.id;

    const user = userBusiness.findByid(id);
    
    if(user) {
        return h.response(user).code(200);
    }
    return h.response("Not found").code(404);
}
const deleteUser = (request, h) => {
    const id = request.params.id;
    const deleted = userBusiness.deleteUser(id);

    if(deleted) {
        return h.response("Deleted").code(200);
    }
    return h.response("Not found").code(404);
}

const update = (request, h) => {
    const id = request.params.id;
    const user = request.payload;

    const updated = userBusiness.update(id, user);

    if(updated) {
        return h.response("Updated").code(200);
    }
    return h.response("Not found").code(404);
}



module.exports = {find, create, getById, deleteUser,update};