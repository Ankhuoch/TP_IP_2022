const Categories = require('../models/categories')

const findById = async (id) => {
    try {
        const category = await Categories.findById(id);
        return {
          success: true,
          data: category
        };
      } catch (err) {
        return {
          success: false,
          error: err || 'error'
        }
      }
}

const findAll = async () => {
    try{
        const category = await Categories.find();
        return {
            success: true,
            data: category
        };
    }catch (err){
        return {
            success: false,
            error: err || 'error'
        }
    }
}

const create = async () => {
    const newProduct = {
        name,
        imageUrl,
        desc
      }
      const createdProduct = await Products.create(newProduct);
      return {
        success: true,
        data: createdProduct,
      }
}

const update = async () => {
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

const remove = async () => {
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
    findAll,
    create,
    update,
    remove
}