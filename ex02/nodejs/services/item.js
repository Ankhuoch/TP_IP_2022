const Items = require('../models/items')

const findById = async (id) => {
    try {
        const item = await Items.findById(id);
        return {
          success: true,
          data: item
        };
      } catch (err) {
        return {
          success: false,
          error: err || 'error'
        }
      }
}

const findAll = async (cateId) => {
    const items = await Items.find({category: cateId})
    return items;
}

const findByCategory = async (cateId) => {
    const items = await Items.find({ category: cateId }).populate('category')
    // Before 
    // {
    //     name,
    //     category, // objectId
    //     desc,
    // }

    // After populate
    // {
    //     name,
    //     category: {
    //         name,
    //         desc,
    //         imageUrl,
    //     } 
    //     desc,
    // }
    return null
}

const create = async () => {
    const newItem = {
        category,
        name,
        desc
      }
      const createdItem = await Products.create(newItem);
      return {
        success: true,
        data: createdItem,
      }
}

const update = async (id) => {
    try {
        Items.findByIdAndUpdate(id);
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
        Items.findByIdAndDelete(id);
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
    remove,
    findByCategory
}