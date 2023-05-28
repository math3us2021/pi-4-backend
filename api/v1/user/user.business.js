const userRepository = require("./user.repository");

const create = (user) => {

    return userRepository.save(user);
};

const findAll = () => {
    return userRepository.findAll();
}

const findByid = (id) => {
    return userRepository.findById(id);
}

const deleteUser = (id) => {
    return userRepository.deleteUser(id);
}

const update = (id, user) => {
    return userRepository.update(id, user);
}


module.exports = {create, findAll, findByid, deleteUser, update};