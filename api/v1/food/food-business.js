const foodRepository = require("./food-repository");

const create = async (food) => {

    return foodRepository.save(food);
};

const findAll = () => {
    return foodRepository.findAll();
}

const findByid = (id) => {
    return foodRepository.findById(id);
}

const deletefood = (id) => {
    return foodRepository.deletefood(id);
}

const update = (id, food) => {
    return foodRepository.update(id, food);
}




module.exports = {create, findAll, findByid, deletefood, update};