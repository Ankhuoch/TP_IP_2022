const Items = require('../models/items')

const findById = async (id) => {
    return await Items.findById(id);
    // try {
    //     return {
    //       success: true,
    //       data: {}
    //     };
    //   } catch (err) {
    //     return {
    //       success: false,
    //       error: err || 'error'
    //     }
    //   }
}

const findAll = async () => {
    const items = await Items.find()
    return items;
}

const create = async (newItem) => {
    const createdItem = await Items.create(newItem);
    return createdItem;
}

const update = async (id, name1, desc1) => {
    var data = {
        name : name1,
        desc : desc1,
      };
      const result = await Items.findByIdAndUpdate(id, data);
      await Items.save();
      return result;
}

const remove = async (id) => {
    await Items.findByIdAndDelete(id);
    return {
        success: true,
        msg: "deleted"
    };
}

module.exports = {
    findById,
    findAll,
    create,
    update,
    remove,
}