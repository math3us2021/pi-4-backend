const pet = require("../pet/pet-models");
const weightMonthRepository = require("./weight-month-repository");

const create = async (weightMonth) => {

    return weightMonthRepository.save(weightMonth);
};

const findAll = () => {
    return weightMonthRepository.findAll();
}

const findByid = ( dateStart, dateEnd, petId) => {
    return weightMonthRepository.findById( dateStart, dateEnd, petId);
}

const deleteweightMonth = (id) => {
    return weightMonthRepository.deleteweightMonth(id);
}

const update = (id, weightMonth) => {
    return weightMonthRepository.update(id, weightMonth);
}

const calculateFoodConsumptionByMonth = async () => {
    const foodConsumptionByMonth = await weightMonthRepository.findAll({
        attributes: [
            'petFeedersId',
            [sequelize.fn('sum', sequelize.col('quantityGrams')), 'foodConsumptionByMonth']
        ],
        group: ['petFeedersId']
    
    })
    foodConsumptionByMonth.forEach(element => {
        // console.log(element.toJSON());
    })
    return foodConsumptionByMonth;
}

module.exports = {create, findAll, findByid, deleteweightMonth, update, calculateFoodConsumptionByMonth};