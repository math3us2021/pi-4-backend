const data = [];

const save = (user) => {

    data.push(user);

    return user;
};

const findAll = () => {
    return data;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

const update = (id, user) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data[index] = user;
        return user;
    }
    return null;
}
const deleteUser = (id) => {
    const index = data.findIndex(c => c.id == id);

    if(index >= 0) {
        data.splice(index, 1);
        return true;
    }
    return false;
}


module.exports = {save, findAll, findById, update, deleteUser};