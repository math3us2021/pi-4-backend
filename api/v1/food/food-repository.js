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
        const result = foodModel.findByPk(id);
        return result;
    
}

const update = async (id, food) => {
    try {
        // Encontre o registro que deseja atualizar
        const record = await foodModel.findByPk(id);
    
        if (!record) {
          throw new Error('Registro não encontrado');
        }
    
        // Atualize os campos necessários com os novos dados
        await record.update(food);
    
        console.log('Registro atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar registro:', error);
      }
}
const deletefood = async (id) => {
    try {
        // Encontre o registro que deseja excluir
        const record = await foodModel.findByPk(id);
    
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


module.exports = {save, findAll, findById, update, deletefood};