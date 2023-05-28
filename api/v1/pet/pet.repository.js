const petModel = require('./pet.model');

const data = [];

const save = (pet) => {
const result = petModel.create(pet);
    return result;
};

const findAll = () => {
   const result = petModel.findAll({raw: true});
    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

const update = (id, pet) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data[index] = pet;
        return pet;
    }
    return null;
}
const deletepet = (id) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data.splice(index, 1);
        return true;
    }
    return false;
}


module.exports = {save, findAll, findById, update, deletepet};