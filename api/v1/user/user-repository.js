
const userModel = require('./user-models');
const uuid = require('uuid');

const save = (user) => {
const result = userModel.create({
  id: uuid.v4(),
  name: user.name,
  cpf: user.cpf,
  phone: user.phone,
  email: user.email,
  password: user.password,
});
    return result;
};

const findAll = () => {
   const result = userModel.findAll({raw: true});
    return result;
}

const findById = (id) => {
    const result = userModel.findByPk(id);
    return result;
}

const update = async (id, user) => {
    try {
        // Encontre o registro que deseja atualizar
        const record = await userModel.findByPk(id);
    
        if (!record) {
          throw new Error('Registro não encontrado');
        }
    
        // Atualize os campos necessários com os novos dados
        await record.update(user);
    
        console.log('Registro atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar registro:', error);
      }
}
const deleteUser = async (id) => {
    try {
        // Encontre o registro que deseja excluir
        const record = await userModel.findByPk(id);
    
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


module.exports = {save, findAll, findById, update, deleteUser};