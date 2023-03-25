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

const getById =  (request, h) => {
    const id = request.params.id;

    const consumer = data.find(c => c.id == id);
    
    if(consumer) {
        return h.response(consumer).code(200);
    }
    return h.response("Not found").code(404);
}

module.exports = {find, create, getById};