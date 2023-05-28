const petRepository = require("./pet.repository");

const create = (pet) => {

    return petRepository.save(pet);
};

const findAll = () => {
    return petRepository.findAll();
}

const findByid = (id) => {
    return petRepository.findById(id);
}

const deletepet = (id) => {
    return petRepository.deletepet(id);
}

const update = (id, pet) => {
    return petRepository.update(id, pet);
}


module.exports = {create, findAll, findByid, deletepet, update};