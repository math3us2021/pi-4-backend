const data = [];

const save = (product) => {

    data.push(product);

    return product;
};

const findAll = () => {
    return data;
}

const findById = (id) => {
    return data.find(c => c.id == id);
}

module.exports = { save, findAll, findById };