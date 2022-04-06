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

const create = async (newItem) => {
    // to do
    const createdItem = await Items.create(newItem);
    return createdItem;
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
}