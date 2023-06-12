const foodModel = require('./food-models');

const data = [];

const save = async (food) => {
const result = foodModel.create(food);
return result;
};

const findAll = () => {
   const result = foodModel.findAll();
    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

const update = (id, food) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data[index] = food;
        return food;
    }
    return null;
}
const deletefood = (id) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data.splice(index, 1);
        return true;
    }
    return false;
}


module.exports = {save, findAll, findById, update, deletefood};