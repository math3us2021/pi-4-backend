const WeightMonthModel = require('./weight-month-models');

const data = [];

const save = async (weightMonth) => {
const result = WeightMonthModel.create(weightMonth);
return result;
};

const findAll = () => {
    console.log('entrei aqui');
   const result = WeightMonthModel.findAll();
    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

const update = (id, weightMonth) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data[index] = weightMonth;
        return weightMonth;
    }
    return null;
}
const deleteWeightMonth = (id) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data.splice(index, 1);
        return true;
    }
    return false;
}





module.exports = {save, findAll, findById, update, deleteWeightMonth};