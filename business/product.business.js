const productRepository = require("../repository/product.repository");

const create = (product) => {
  return productRepository.save(product);
};

const findAll = () => {
  return productRepository.findAll();
};

const findByid = (id) => {
  return productRepository.findById(id);
};

module.exports = { create, findAll, findByid };
