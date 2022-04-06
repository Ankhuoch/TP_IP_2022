const Products = require("../models/products")

const findById = async (id) => {
  try {
    const product = await Products.findById(id);
    return {
      success: true,
      data: product
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const findAll = async ()=>{
  try{
      const product = await Products.find();
      return {
          success: true,
          data: product
      };
  }catch (err){
      return {
          success: false,
          error: err || 'error'
      }
  }
}

const create = async (newProduct) => {
  const createdProduct = await Products.create(newProduct);
  return createdProduct;
}

const update = async (id) => {
  try {
    Users.findByIdAndUpdate(id);
    return {
        success: true,
        msg: "updated"
    };
  } catch (err) {
      return {
          success: false,
          error: err || 'error'
      }
  }
}

const remove = async (id) => {
  try {
    Users.findByIdAndDelete(id);
    return {
        success: true,
        msg: "deleted"
    };
  }catch (err) {
      return {
          success: false,
          error: err || 'error'
      }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}