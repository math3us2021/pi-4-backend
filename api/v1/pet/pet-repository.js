const PetModel = require('./pet-models');

const data = [];

const save = async (pet) => {
const result = PetModel.create(pet);
return result;
};


const findAll = (type) => {
  const options = type ? { where: { type } } : {};
  const result = PetModel.findAll(options);
  return result;
}

const findById = (id) => {
    const result = PetModel.findByPk(id);
    return result;
}

const update = async (id, pet) => {
    try {
        // Encontre o registro que deseja atualizar
        const record = await PetModel.findByPk(id);
    
        if (!record) {
          throw new Error('Registro não encontrado');
        }
    
        // Atualize os campos necessários com os novos dados
        await record.update(pet);
    
        console.log('Registro atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar registro:', error);
      }
}
const deletepet = async (id) => {
    try {
        // Encontre o registro que deseja excluir
        const record = await PetModel.findByPk(id);
    
        if (!record) {
          throw new Error('Registro não encontrado');
        }
    
        // Exclua o registro
        await record.destroy();
    
        console.log('Registro excluído com sucesso!');
      } catch (error) {
        console.error('Erro ao excluir registro:', error);
      }
}


module.exports = {save, findAll, findById, update, deletepet};