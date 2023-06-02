const userModel = require('./user-models');

const data = [];

const save = (user) => {
const result = userModel.create(user);
    return result;
};

const findAll = () => {
   const result = userModel.findAll({raw: true});
    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

const update = (id, user) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data[index] = user;
        return user;
    }
    return null;
}
const deleteUser = (id) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data.splice(index, 1);
        return true;
    }
    return false;
}


module.exports = {save, findAll, findById, update, deleteUser};