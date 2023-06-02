const weightMonthRepository = require("./weight-month-repository");

const create = async (weightMonth) => {

    return weightMonthRepository.save(weightMonth);
};

const findAll = () => {
    return weightMonthRepository.findAll();
}

const findByid = (id) => {
    return weightMonthRepository.findById(id);
}

const deleteweightMonth = (id) => {
    return weightMonthRepository.deleteweightMonth(id);
}

const update = (id, weightMonth) => {
    return weightMonthRepository.update(id, weightMonth);
}


module.exports = {create, findAll, findByid, deleteweightMonth, update};