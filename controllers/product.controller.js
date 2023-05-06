const productBusiness = require("../business/product.business");

const create = (request, h) => {
  productBusiness.create(request.payload);
  return "Product created";
};

const find = (request, h) => {
  const { title, brand, attribute_type, attribute_value } = request.query;
  const products = productBusiness.findAll();

  if (!title && !brand && !attribute_type && !attribute_value) {
    return products;
  }

  const filteredProducts = products.filter((product) => {
    if (title && !product.title.toLowerCase().includes(title.toLowerCase())) {
      return false;
    }
    if (brand && !product.brand.toLowerCase().includes(brand.toLowerCase())) {
      return false;
    }
    if (
      attribute_type &&
      !product.attributes.some(
        (attributes) => attributes.type === attribute_type
      )
    ) {
      return false;
    }
    if (
      attribute_value &&
      !product.attributes.some(
        (attributes) => attributes.value === attribute_value
      )
    ) {
      return false;
    }
    return true;
  });

  return filteredProducts;
};

const getById = (request, h) => {
  const id = request.params.id;

  const product = productBusiness.findByid(id);

  if (product) {
    return h.response(product).code(200);
  }
  return h.response("Not found").code(404);
};

module.exports = { find, create, getById };
