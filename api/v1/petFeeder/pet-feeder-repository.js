const petFeederModel = require('./pet-feeder-models');

const data = [];

const save = async (petFeeder) => {
const result = petFeederModel.create(petFeeder);
return result;
};

const findAll = () => {
   const result = petFeederModel.findAll();
    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

const update = (id, petFeeder) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data[index] = petFeeder;
        return petFeeder;
    }
    return null;
}
const deletepetFeeder = (id) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data.splice(index, 1);
        return true;
    }
    return false;
}
//somar a quantidade de comida



module.exports = {save, findAll, findById, update, deletepetFeeder};