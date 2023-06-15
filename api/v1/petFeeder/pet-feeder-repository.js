const petFeederModel = require('./pet-feeder-models');
const uuid = require('uuid');

const save = async (petFeeder) => {
const result = petFeederModel.create(petFeeder);
return result;
};

const findAll = () => {
   const result = petFeederModel.findAll();
    return result;
}

const findById = (id) => {
    const result = petFeederModel.findByPk(id);
    return result;
}

const update = async (id, petFeeder) => {
    try {
        // Encontre o registro que deseja atualizar
        const record = await petFeederModel.findByPk(id);
    
        if (!record) {
          throw new Error('Registro não encontrado');
        }
    
        // Atualize os campos necessários com os novos dados
        await record.update(petFeeder);
    
        console.log('Registro atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar registro:', error);
      }
}
const deletepetFeeder = async (id) => {
    try {
        // Encontre o registro que deseja excluir
        const record = await petFeederModel.findByPk(id);
    
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




module.exports = {save, findAll, findById, update, deletepetFeeder};