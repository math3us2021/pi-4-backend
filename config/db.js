const { Sequelize } = require('sequelize');

const sequelizeConfig = {
    logging: console.log,  /// mostra o que esta acontecendo no banco de dados
    dialect: 'mysql',
    port: 3306,
    host: 'petcomilao.mysql.database.azure.com',
    pool: 2,  /// numero de conexoes simultaneas
    ssl: true,
    dialectOptions : {
      ssl  : {
        require:true
      }
    }
}
const sequelize = new Sequelize('petcomilao', 'petadmin', 'comilao123@' , sequelizeConfig); 

module.exports = sequelize;