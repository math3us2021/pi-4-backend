const petFeederRepository = require("./pet-feeder-repository");

const create = async (petFeeder) => {

    return petFeederRepository.save(petFeeder);
};

const findAll = () => {
    return petFeederRepository.findAll();
}

const findByid = (id) => {
    return petFeederRepository.findById(id);
}

const deletepetFeeder = (id) => {
    return petFeederRepository.deletepetFeeder(id);
}

const update = (id, petFeeder) => {
    return petFeederRepository.update(id, petFeeder);
}





module.exports = {create, findAll, findByid, deletepetFeeder, update};