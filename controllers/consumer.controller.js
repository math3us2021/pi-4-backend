const data = [
    {
        "id": 1,
        "name": "Samuel"
    },
    {
        "id": 2,
        "name": "Izamara"
    }
]

const find = (request, h) => {
    return data;
}

const create = (request, h) => {
    data.push(request.payload);
    return "created";
}

module.exports = {find, create};