const Products = require("../models/products")

const findById = async (id) => {
    return await Products.findById(id);
}

const findAll = async () => {
    const product = await Products.find();
    return product;
}

const create = async (newProduct) => {
  const createdProduct = await Products.create(newProduct);
  return createdProduct;
}

const update = async (id, title, imageUrl, desc) => {
  var data = {
    title : title,
    imageUrl: imageUrl,
    desc : desc,
  };
  const result = await Products.findByIdAndUpdate(id, data);
  await Products.save();
  return result;
}

const remove = async (id) => {
  await Products.findByIdAndDelete(id);
  return {
    success: true,
    msg: "deleted"
  };
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}